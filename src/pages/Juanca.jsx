import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo-utn-blanco.png";
import { FiHeart, FiPlusCircle } from "react-icons/fi";
import { FaSyringe, FaPills } from "react-icons/fa";

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
      <header className="bg-[#003973] text-white py-3 px-4 md:px-[10%] lg:px-10 w-full flex items-center text-xl md:text-3xl">
        <div className="flex-none mr-4 sm:mr-6">
          <img
            src={logo}
            alt="Logo UTN"
            className="h-8 md:h-12 w-auto max-h-12"
          />
        </div>
        {/* Título */}
        <div className="flex-grow text-center">
          <span className="text-lg sm:text-xl md:text-2xl font-bold">
            MiSaludUTN
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-1 md:px-20 lg:px-100 py-10 bg-[#F2F2F2]">
        <div className="w-full max-w-60x2 bg-white rounded-lg shadow-lg p-6">
          {/* Header de Crear Perfil */}
          <div className="flex items-center justify-between bg-[#003973] text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Crear Perfil</h2>
            <button className="bg-[#003973] px-4 py-2 rounded border">
              Cancelar
            </button>
          </div>

          {/* Navegación de Secciones */}
          <div className="mt-4 flex justify-center space-x-10 border-b-2 border-gray-300 pb-4">
            <button className="text-gray-500 font-semibold">
              Información Personal
            </button>
            <button className="text-gray-500 font-semibold">
              Información Médica
            </button>
            <button
              onClick={goToInformacionMedica}
              className="text-black font-semibold"
            >
              Contactos Adicionales
            </button>
          </div>

          {/* Formulario */}

          <form className="justify-center md:px-20 lg:px-20 max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700">
                  Tipo de sangre
                </label>
                <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
                  <option>Seleccione el tipo de sangre</option>
                </select>
              </div>

         <div className="col-span-1 flex flex-col space-y-4">
              <div className="flex items-center">
                <label className="flex items-center text-gray-700 font-semibold mr-4">
                  <FaSyringe className="text-orange-500 mr-1" />
                  Acepta transfusiones de sangre
                </label>
                <input type="checkbox" className="toggle-checkbox" />
              </div>

              <div className="flex items-center">
                <label className="flex items-center text-gray-700 font-semibold mr-4">
                  <FiHeart className="text-orange-500 mr-1" />
                  Donante
                </label>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
            </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700">
                Enfermedades Crónicas
              </label>
              <div className="flex items-center mt-1">
                <button
                  type="button"
                  onClick={handleAddContact}
                  className="w-full bg-white text-black px-4 py-2 rounded border border-dashed border-gray-400 hover:bg-gray-100"
                >
                  + Agregar Enfermedad Crónica
                </button>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700">
                Alergias
              </label>
              <button
                type="button"
                onClick={handleAddContact}
                className="w-full bg-white text-black px-4 py-2 rounded border border-dashed border-gray-400 hover:bg-gray-100"
              >
                + Agregar Alergía
              </button>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700">
                Medicamentos
              </label>
              <textarea
                placeholder="Ingrese los medicamentos"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                rows="3"
              ></textarea>
            </div>
            {/* Botones de Finalizar y Retroceder */}
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                className="bg-white-300 text-[#003973]  px-6 py-2 rounded border border-[#003973] hover:bg-gray-400"
              >
                Retroceder
              </button>
              <button
                type="submit"
                className="bg-white-500 text-orange-500 px-6 py-2 rounded border border-orange-500 hover:bg-blue-400"
              >
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
