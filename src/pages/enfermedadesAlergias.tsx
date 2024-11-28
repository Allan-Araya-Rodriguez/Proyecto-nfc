import React, { useState, useEffect } from "react";
import { Edit2, X, Check } from "lucide-react";
import Headers from "../components/header";
import MenuBar from "../components/menuCrear";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormulario } from "../context/FormularioContext"; // Importar el hook de contexto

const RegistroEnfermedadesYAlergias: React.FC = () => {
    const navigate = useNavigate();

    // Obtener los métodos y el estado del contexto
    const {
        formulario,
        agregarEnfermedad,
        agregarAlergia,
        eliminarEnfermedad,
        eliminarAlergia,
        editarEnfermedad,
        editarAlergia,
    } = useFormulario();

    const [enfermedad, setEnfermedad] = useState<string>("");
    const [alergia, setAlergia] = useState<string>("");
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [editValue, setEditValue] = useState<string>("");

    // Manejar agregar, editar y eliminar elementos
    const handleAgregar = (item: string, tipo: "enfermedad" | "alergia") => {
        if (item.trim()) {
            if (tipo === "enfermedad") {
                agregarEnfermedad(item);
            } else {
                agregarAlergia(item);
            }
        }
    };

    const handleEditar = (id: number, tipo: "enfermedad" | "alergia") => {
        if (tipo === "enfermedad") {
            editarEnfermedad(id, editValue);
        } else {
            editarAlergia(id, editValue);
        }
        setEditandoId(null);
        setEditValue("");
    };

    const handleEliminar = (id: number, tipo: "enfermedad" | "alergia") => {
        if (tipo === "enfermedad") {
            eliminarEnfermedad(id);
        } else {
            eliminarAlergia(id);
        }
    };

    return (
        <div>
            <Headers />
            <div className="flex justify-center items-center mt-10">
                <div className="w-full mx-56 bg-white border border-gray-100 shadow rounded overflow-hidden font-serif">
                    <div className="bg-primary h-16 flex justify-between items-center px-4">
                        <span className="text-white ml-10 text-lg font-bold">Crear Perfil</span>
                        <button className="border border-white text-white py-2 px-10 mr-10 rounded text-xs">Cancelar</button>
                    </div>
                    <MenuBar />

                    <div className="p-4 mx-10">
                        {/* Sección de Enfermedades */}
                        <div className="mb-4">
                            <h2 className="font-semibold mb-2">Enfermedades</h2>
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    value={enfermedad}
                                    onChange={(e) => setEnfermedad(e.target.value)}
                                    placeholder="Ingrese una enfermedad"
                                    className="border p-2 rounded flex-grow"
                                />
                                <button
                                    onClick={() => {
                                        handleAgregar(enfermedad, "enfermedad");
                                        setEnfermedad("");
                                    }}
                                    className="bg-secondary text-white px-4 py-2 rounded hover:bg-gray-800"
                                >
                                    + Agregar
                                </button>
                            </div>
                            <ul>
                                {formulario.enfermedades.map((item) => (
                                    <li key={item.id} className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded">
                                        {editandoId === item.id ? (
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                className="border p-1 rounded flex-grow"
                                            />
                                        ) : (
                                            <span>{item.name}</span>
                                        )}
                                        <div className="flex gap-2">
                                            {editandoId === item.id ? (
                                                <button
                                                    onClick={() => handleEditar(item.id, "enfermedad")}
                                                >
                                                    <Check className=" text-secondary" />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        setEditandoId(item.id);
                                                        setEditValue(item.name);
                                                    }}
                                                >
                                                    <Edit2 className=" text-secondary" />
                                                </button>
                                            )}
                                            <button onClick={() => handleEliminar(item.id, "enfermedad")}>
                                                <X className=" text-secondary" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Sección de Alergias */}
                        <div>
                            <h2 className="font-semibold mb-2">Alergias</h2>
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    value={alergia}
                                    onChange={(e) => setAlergia(e.target.value)}
                                    placeholder="Ingrese una alergia"
                                    className="border p-2 rounded flex-grow"
                                />
                                <button
                                    onClick={() => {
                                        handleAgregar(alergia, "alergia");
                                        setAlergia("");
                                    }}
                                    className="bg-primary text-white px-4 py-2 rounded hover:bg-gray-800"
                                >
                                    + Agregar
                                </button>
                            </div>
                            <ul>
                                {formulario.alergias.map((item) => (
                                    <li key={item.id} className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded">
                                        {editandoId === item.id ? (
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                className="border p-1 rounded flex-grow"
                                            />
                                        ) : (
                                            <span>{item.name}</span>
                                        )}
                                        <div className="flex gap-2">
                                            {editandoId === item.id ? (
                                                <button
                                                    onClick={() => handleEditar(item.id, "alergia")}
                                                >
                                                    <Check className=" text-secondary" />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        setEditandoId(item.id);
                                                        setEditValue(item.name);
                                                    }}
                                                >
                                                    <Edit2 className=" text-secondary" />
                                                </button>
                                            )}
                                            <button onClick={() => handleEliminar(item.id, "alergia")}>
                                                <X className=" text-secondary" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-between">
                            <button className="border border-blue-700 text-blue-700 py-2 px-10 rounded text-xs" onClick={() => navigate("/crear3")}>
                                Retroceder
                            </button>
                            <button className="border border-secondary text-secondary py-2 px-10 rounded text-xs" onClick={() => navigate("/")}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroEnfermedadesYAlergias;
