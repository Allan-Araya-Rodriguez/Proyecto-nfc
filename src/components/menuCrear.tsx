import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MenuBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

 
  const handleTabClick = (route: string) => {
    navigate(route); 
  };

  return (
    <div className="bg-background text-white p-1 rounded-sm mx-10 mt-8 text-sm flex justify-center">
      <div className="flex w-full justify-between space-x-1">
        {/* Información Personal */}
        <button
          className={`px-3 py-1 w-full ${
            location.pathname === "/crear1" ? "text-primary bg-white font-bold" : "text-gray-500"
          }`}
          onClick={() => handleTabClick("/crear1")}
        >
          Información Personal
        </button>

        {/* Información Médica */}
        <button
          className={`px-3 py-1 w-full ${
            location.pathname === "/crear2" ? "text-primary bg-white font-bold" : "text-gray-500"
          }`}
          onClick={() => handleTabClick("/crear2")}
        >
          Información Médica
        </button>

        {/* Contacto y Adicionales */}
        <button
          className={`px-3 py-1 w-full ${
            location.pathname === "/crear3" ? "text-primary bg-white font-bold" : "text-gray-500"
          }`}
          onClick={() => handleTabClick("/crear3")}
        >
          Contacto y Adicionales
        </button>
        {/* Información Personal */}
        <button
          className={`px-3 py-1 w-full ${
            location.pathname === "/crear4" ? "text-primary bg-white font-bold" : "text-gray-500"
          }`}
          onClick={() => handleTabClick("/crear4")}
        >
          Alergias y enfermedades
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
