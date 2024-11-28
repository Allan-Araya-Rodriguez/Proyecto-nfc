import Headers from '../components/header';
import MenuBar from '../components/menuCrear';
import { useFormulario } from '../context/FormularioContext'; // Importar el hook
import { useNavigate } from 'react-router-dom';

function Crear2() {
  const navigate = useNavigate();
  const { formulario, setFormulario } = useFormulario(); // Usar el contexto

  // Manejar los cambios en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    if (type === 'checkbox') {
      setFormulario((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormulario((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className='bg-background h-screen'>
      <Headers />
      <div className="flex justify-center items-center mt-10">
        <div className="w-full mx-56 bg-white border border-gray-100 shadow rounded overflow-hidden font-serif">
          {/* Encabezado */}
          <div className="bg-primary h-16 flex justify-between items-center px-4">
            <span className="text-white ml-10 text-lg font-bold">Crear Perfil</span>
            <button className="border border-white text-white py-2 px-10 mr-10 rounded text-xs">Cancelar</button>
          </div>
          <MenuBar />
          {/* Formulario */}
          <div className="p-4 mx-10 block text-gray-700  text-xs mb-2">
            {/* Tipo de Sangre */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold text-xs mb-2">Tipo de sangre</label>
              <select
                name="tipoSangre"
                className="w-full border border-gray-300 rounded focus:ring-0 text-sm pr-10 pl-3 focus:outline-none appearance-none h-[40px]"
                value={formulario.tipoSangre}
                onChange={handleInputChange}
              >
                <option value="">Seleccione el tipo de sangre</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Toggle Buttons */}
            <div className="flex items-center gap-8 mb-4">
              {/* Acepta transfusiones de sangre */}
              <div className="flex items-center gap-2">
                <span>Acepta transfusiones de sangre</span>
                <button
                  onClick={() => setFormulario((prev) => ({ ...prev, acceptsTransfusions: !prev.acceptsTransfusions }))}
                  className={`relative w-10 h-5 rounded-full ${formulario.acceptsTransfusions ? "bg-primary" : "bg-gray-300"} transition-colors duration-300`}
                >
                  <span
                    className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${formulario.acceptsTransfusions ? "translate-x-5" : "translate-x-0"}`}
                  ></span>
                </button>
              </div>

              {/* Donante */}
              <div className="flex items-center gap-2">
                <span>Donante</span>
                <button
                  onClick={() => setFormulario((prev) => ({ ...prev, isDonor: !prev.isDonor }))}
                  className={`relative w-10 h-5 rounded-full ${formulario.isDonor ? "bg-primary" : "bg-gray-300"} transition-colors duration-300`}
                >
                  <span
                    className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${formulario.isDonor ? "translate-x-5" : "translate-x-0"}`}
                  ></span>
                </button>
              </div>
            </div>

            {/* Medicamentos */}
            <div className="mb-6">
              <label>Medicamentos</label>
              <textarea
                name="medicamentos"
                className="w-full h-24 border px-2 pt-2 border-gray-300 mt-2 rounded text-sm focus:border-black-500 focus:outline-none"
                placeholder="Ingrese los medicamentos"
                value={formulario.medicamentos}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Botones */}
            <div className="flex justify-between">
              <button className="border border-blue-700 text-blue-700 py-2 px-10 rounded text-xs" onClick={() => navigate("/crear1")}>
                Retroceder
              </button>
              <button className="border border-secondary text-secondary py-2 px-10 rounded text-xs" onClick={() => navigate("/crear3")}>
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crear2;
