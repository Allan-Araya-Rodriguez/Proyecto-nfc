import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPinHouse } from 'lucide-react';
import InputField from '../components/input';
import Headers from '../components/header';
import MenuBar from '../components/menuCrear';
import { useFormulario } from '../context/FormularioContext'; // Importar el contexto

function Crear3() {
    const navigate = useNavigate();

    // Obtener el estado y el setter del contexto
    const { formulario, setFormulario } = useFormulario();

    // Manejo de estado local para los nuevos campos
    const [correo, setCorreo] = useState(formulario.correo);
    const [telef, setTelef] = useState(formulario.telefonoPersonal);
    const [direccion, setDireccion] = useState(formulario.direccion);
    const [telefEmergencia, setTelefEmergencia] = useState(formulario.telefonoEmergencia);

    // Actualizar el estado global cuando el valor cambie
    useEffect(() => {
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            correo,
            telefonoPersonal: telef,
            direccion,
            telefonoEmergencia: telefEmergencia,
        }));
    }, [correo, telef, direccion, telefEmergencia, setFormulario]);

    const handleCorreoChange = (e: React.ChangeEvent<HTMLInputElement>) => setCorreo(e.target.value);
    const handleTelefChange = (e: React.ChangeEvent<HTMLInputElement>) => setTelef(e.target.value);
    const handleDireccionChange = (e: React.ChangeEvent<HTMLInputElement>) => setDireccion(e.target.value);
    const handleTelefEmergenciaChange = (e: React.ChangeEvent<HTMLInputElement>) => setTelefEmergencia(e.target.value);

    return (
        <div className='bg-background h-screen'>
            <Headers />
            <div className="flex justify-center items-center mt-10">
                <div className="w-full mx-56 bg-white border border-gray-100 shadow rounded overflow-hidden font-serif">
                    {/* Encabezado */}
                    <div className="bg-primary h-16 flex justify-between items-center px-4">
                        <span className="text-white ml-10 text-lg font-bold">Crear Perfil</span>
                        <button className="border border-white text-white py-2 px-10 mr-10 rounded text-xs" onClick={() => navigate("/RUTA TABLA")}>Cancelar</button>
                    </div>
                    {/* Barra de progreso */}
                    <MenuBar />
                    {/* Formulario */}
                    <div className="p-4 mx-10">
                        <form>
                            <InputField
                                name="correo"
                                label="Correo"
                                placeholder="Ingrese su Correo"
                                type="text"
                                Icon={Mail}
                                value={correo}
                                onChange={handleCorreoChange}
                            />
                            <InputField
                                name="telefonoPersonal"
                                label="Teléfono"
                                placeholder="Ingrese su Teléfono"
                                type="text"
                                Icon={Phone}
                                value={telef}
                                onChange={handleTelefChange}
                            />
                            <InputField
                                name="telefonoEmergencia"
                                label="Teléfono de Emergencia"
                                placeholder="Ingrese su Teléfono de Emergencia"
                                type="text"
                                Icon={Phone}
                                value={telefEmergencia}
                                onChange={handleTelefEmergenciaChange}
                            />
                            <InputField
                                name="direccion"
                                label="Dirección"
                                placeholder="Ingrese su Dirección"
                                type="text"
                                Icon={MapPinHouse}
                                value={direccion}
                                onChange={handleDireccionChange}
                            />
                        </form>

                        <div className="flex justify-between">
                            <button className="border border-blue-700 text-blue-700 py-2 px-10  rounded text-xs" onClick={() => navigate("/crear2")}>
                                Retroceder
                            </button>
                            <button className="border border-secondary text-secondary py-2 px-10  rounded text-xs" onClick={() => navigate("/crear4")}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crear3;
