import { useState, useEffect, useRef } from "react";
import { Eye, Edit, Trash2, MoreVertical } from "lucide-react";
import Headers from "../components/header";
import { Navigation, useNavigate } from "react-router-dom";

const MedicalProfiles = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      cedula: "504530729",
      nombre: "Allan Araya",
      tipoSangre: "O+",
      alergias: "Aspirina",
      enfermedadesCronicas: "Diabetes tipo 2",
    },
    {
      id: 2,
      cedula: "402530111",
      nombre: "María Pérez",
      tipoSangre: "A-",
      alergias: "Penicilina",
      enfermedadesCronicas: "Hipertensión",
    },
    {
      id: 3,
      cedula: "304520123",
      nombre: "Carlos Mora",
      tipoSangre: "B+",
      alergias: "Ninguna",
      enfermedadesCronicas: "Asma",
    },
  ]);

  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (index: number, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setDropdownPosition({ x: rect.left, y: rect.bottom });
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <Headers />
      <div className="flex justify-center items-center mt-10">
        <main className="w-full mx-56 bg-white border border-gray-100 shadow rounded overflow-hidden font-serif">
          <div className="relative bg-primary h-16 flex justify-between items-center px-4 overflow-hidden">
            <span className="text-white text-lg font-bold">
              Gestión de Perfiles Médicos
            </span>
            <svg
              className="absolute top-0 right-0 h-16 w-16"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="0,0 100,0 100,100" fill="#FF6600" />
            </svg>
          </div>
          <div className="flex items-center justify-between m-4">
            <span className="text-lg text-[#003366] font-semibold">
              Perfiles Registrados
            </span>
            <div className="relative flex-1 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3a6 6 0 104.473 10.473l4.075 4.075a1 1 0 101.414-1.414l-4.075-4.075A6 6 0 009 3zm0 2a4 4 0 100 8 4 4 0 000-8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-orange-600 transition" onClick={() => navigate("/crear1")}>
              + Crear Nuevo Perfil
            </button>
          </div>
          <div className="overflow-x-auto m-4 rounded">
            <table className="min-w-full bg-white rounded-lg relative">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                    Cédula
                  </th>
                  <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                    Nombre
                  </th>
                  <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                    Tipo de Sangre
                  </th>
                  <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                    Alergias
                  </th>
                  <th className="py-3 px-6 text-left font-semibold text-sm text-gray-700">
                    Enfermedades Crónicas
                  </th>
                  <th className="py-3 px-6 text-center font-semibold text-sm text-gray-700">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile, index) => (
                  <tr key={profile.id} className="border-t">
                    <td className="py-3 px-6 text-sm  text-gray-700">
                      {profile.cedula}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-700">
                      {profile.nombre}
                    </td>
                    <td className="py-3 px-6 text-sm  text-gray-700">
                      {profile.tipoSangre}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-700">
                      {profile.alergias}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-700">
                      {profile.enfermedadesCronicas}
                    </td>
                    <td className="py-3 px-6 text-center relative">
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={(e) => toggleDropdown(index, e)}
                      >
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        {dropdownIndex !== null && (
          <div
            ref={dropdownRef}
            className="absolute bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            style={{
              top: dropdownPosition.y,
              left: dropdownPosition.x,
              width: "150px",
            }}
          >
            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full" onClick={()=>navigate("/vista")}>
              <Eye className="mr-2" size={16} />
              Ver
            </button>
            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"onClick={()=>navigate("")}>
              <Edit className="mr-2" size={16} />
              Editar
            </button>
            <button className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 w-full"onClick={()=>navigate("")}>
              <Trash2 className="mr-2" size={16} />
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalProfiles;
