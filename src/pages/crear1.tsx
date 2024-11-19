import Headers from '../components/header';
import MenuBar from '../components/menuCrear';
import FormularioRegistro from '../components/FormularioRegistro1'; 
import PhotoUpload from '../components/cargarImg';
function Crear1() {
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
          {/* Barra de progreso */}
          <MenuBar />
          {/* Formulario */}
          <div className="p-4 mx-10">
            <FormularioRegistro />
            <PhotoUpload />
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="border border-secondary text-secondary py-2 px-10  rounded text-xs"
              >
                Siguiente
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crear1;
