import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import logo from '../img/logo-utn-blanco.png';
import { FiPhone, FiPlusCircle,FiUser  } from 'react-icons/fi';

export default function Registro() {
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [newContact, setNewContact] = useState("");
  const navigate = useNavigate(); 

  const handleAddContact = () => {
    if (newContact) {
      setEmergencyContacts([...emergencyContacts, newContact]);
      setNewContact("");
    }
  };

  const handleRemoveContact = (index) => {
    const updatedContacts = emergencyContacts.filter((_, i) => i !== index);
    setEmergencyContacts(updatedContacts);
  };


  const goToInformacionMedica = () => {
    navigate("./Component/Registro.jsx"); 
  };
  

  return (
  <div className="min-h-screen flex flex-col bg-gray-100">
    {/* Header */}
    <header className="bg-[#003973] text-white py-3 px-4 md:px-[10%] lg:px-10 w-full flex items-center text-xl md:text-3xl">
      {/* Logo */}
      <div className="flex-none mr-4 sm:mr-6">
        <img src={logo} alt="Logo UTN" className="h-8 md:h-12 w-auto max-h-12" />
      </div>
      {/* Título */}
      <div className="flex-grow text-center">
        <span className="text-lg sm:text-xl md:text-2xl font-bold">MiSaludUTN</span>
      </div>
    </header>

    {/* Main Content */}
    <main className="flex-grow flex items-center justify-center px-1 md:px-20 lg:px-100 py-10 bg-[#F2F2F2]">
      <div className="w-full max-w-60x2 bg-white rounded-lg shadow-lg p-6">
        {/* Header de Crear Perfil */}
        <div className="flex items-center justify-between bg-[#003973] text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Crear Perfil</h2>
          <button className="bg-[#003973] px-4 py-2 rounded border">Cancelar</button>
        </div>

        {/* Navegación de Secciones */}
        <div className="mt-4 flex justify-center space-x-10 border-b-2 border-gray-300 pb-4">
        <button className="text-gray-500 font-semibold">Información Personal</button>
          <button className="text-gray-500 font-semibold">
            Información Médica
          </button>
          <button  onClick={goToInformacionMedica} className="text-black font-semibold">Contactos Adicionales</button>

        </div>

        {/* Formulario */}

        <div className="justify-center md:px-20 lg:px-20 max-w-[1320px] mx-auto">
            <form className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="col-span-1">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                    Teléfono
                  </label>
                  <div className="flex items-center mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiUser className="h-5 w-5 text-orange-500 mr-2" />
                      <input
                        type="tel"
                        id="phone"
                        className="w-full focus:outline-none"
                        placeholder="(506) 8723-8956"
                      />
                    </div>
                </div>
              </div>

              {/* Dirección */}
              <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                  Dirección
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Provincia, ciudad"
                />
              </div>

              {/* Contactos de Emergencia */}
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700">Contactos de Emergencia</label>
                <div className="space-y-3">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex justify-between items-center space-x-2 border p-3 rounded-md">
                        <input
                          type="text"
                          value={contact}
                          readOnly
                          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
                        />
                      
                      <button
                        type="button"
                        onClick={() => handleRemoveContact(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                  <div className="mt-3 ">
                  <div className="w-full px-4 py-2 mt-3 flex items-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiPhone className="h-5 w-5 text-orange-500 mr-2" />
                      <input
                        type="text"
                        value={newContact}
                        onChange={(e) => setNewContact(e.target.value)}
                        placeholder="Agregar contacto de emergencia"
                        className="w-full focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-center mt-2">
                      <button
                        type="button"
                        onClick={handleAddContact}
                        className="w-full bg-white text-black px-4 py-2 rounded border border-dashed border-gray-400 hover:bg-gray-100"
                      >
                        + Agregar Contacto
                      </button>
                    </div>
                  </div>
                  </div>
              </div>

              {/* Botones de Finalizar y Retroceder */}
              <div className="mt-8 flex justify-between">
                <button type="button" className="bg-white-300 text-[#003973]  px-6 py-2 rounded border  hover:bg-gray-400">
                  Retroceder
                </button>
                <button type="submit" className="bg-white-500 text-red-400 px-6 py-2 rounded border hover:bg-blue-400">
                  Finalizar
                </button>
              </div>
            </form>
          </div>
      </div>
    </main>
  </div>
);
}
