import React, { useState } from "react";
import { Edit2, X, Check } from "lucide-react"; // Importar íconos específicos
import Headers from "../components/header";
import MenuBar from "../components/menuCrear";

interface Item {
    id: number;
    name: string;
}

const RegistroEnfermedadesYAlergias: React.FC = () => {
    const [enfermedad, setEnfermedad] = useState<string>("");
    const [alergia, setAlergia] = useState<string>("");
    const [enfermedades, setEnfermedades] = useState<Item[]>([]);
    const [alergias, setAlergias] = useState<Item[]>([]);
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [editValue, setEditValue] = useState<string>("");

    const handleAgregar = (item: string, setItems: React.Dispatch<React.SetStateAction<Item[]>>, items: Item[]) => {
        if (item.trim()) {
            setItems([...items, { id: Date.now(), name: item }]);
        }
    };

    const handleEditar = (id: number, items: Item[], setItems: React.Dispatch<React.SetStateAction<Item[]>>) => {
        const updatedItems = items.map((item) => (item.id === id ? { ...item, name: editValue } : item));
        setItems(updatedItems);
        setEditandoId(null);
        setEditValue("");
    };

    const handleEliminar = (id: number, setItems: React.Dispatch<React.SetStateAction<Item[]>>) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
                                        handleAgregar(enfermedad, setEnfermedades, enfermedades);
                                        setEnfermedad("");
                                    }}
                                    className="bg-secondary text-white px-4 py-2 rounded hover:bg-gray-800"
                                >
                                    + Agregar
                                </button>
                            </div>
                            <ul>
                                {enfermedades.map((item) => (
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
                                                    onClick={() => handleEditar(item.id, enfermedades, setEnfermedades)}
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
                                            <button onClick={() => handleEliminar(item.id, setEnfermedades)}>
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
                                        handleAgregar(alergia, setAlergias, alergias);
                                        setAlergia("");
                                    }}
                                    className="bg-primary text-white px-4 py-2 rounded hover:bg-gray-800"
                                >
                                    + Agregar
                                </button>
                            </div>
                            <ul>
                                {alergias.map((item) => (
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
                                                    onClick={() => handleEditar(item.id, alergias, setAlergias)}
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
                                            <button onClick={() => handleEliminar(item.id, setAlergias)}>
                                                <X className=" text-secondary" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroEnfermedadesYAlergias;
