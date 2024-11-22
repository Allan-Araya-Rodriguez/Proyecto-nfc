/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { FaStethoscope, FaHandHoldingHeart, FaPrescriptionBottle, FaTint, FaMapMarkedAlt } from "react-icons/fa";
import { GiNoseSide } from "react-icons/gi";
import { MdEmail, MdContacts, MdPhoneIphone } from "react-icons/md";
import LabelItem from "../components/LabelItem";
import LabelIconItem from "../components/LabelIconItem";
import { GiMedicalDrip } from "react-icons/gi";

export default function Vista() {
  const [foto, setFoto] = useState<string | null>(null);
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [carrera, setCarrera] = useState("");

  const [isTransfusiones, setIsTransfusiones] = useState("");
  const [tipoSangre, setTipoSangre] = useState("");
  const [isDonante, setIsDonante] = useState("");

  const [listaAlergias, setListaAlergias] = useState<string[]>([]);
  const [listaMedicamentos, setListaMedicamentos] = useState<string[]>([]);
  const [listaEnfermedades, setListaEnfermedades] = useState<string[]>([]);

  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [contactos, setContactos] = useState<{ name: string; phone: string }[]>([]);

  const fetchEstudiante = async () => {
    try {
        const response = await fetch("http://localhost:100/estudiante/456789123");
    
      const data = await response.json(); // Await the JSON parsing
      console.log(data); // Log the parsed data to verify structure
  
      // Map API response to state variables
      setFoto(data.Foto || "default-profile.png");
      setCedula(data.Cedula.toString());
      setNombre(`${data.Nombre} ${data.PrimerApellido} ${data.SegundoApellido}`);
      setFecha(new Date(data.FechaNacimiento).toLocaleDateString("en-US"));
      setCarrera(data.Carrera);
  
      setIsTransfusiones(data.TransfusionSangre ? "Sí" : "No");
      setTipoSangre(data.TipoSangre);
      setIsDonante(data.Donante ? "Sí" : "No");
  
      setListaAlergias(data.Alergias || []);
      setListaMedicamentos(data.Medicamentos || []);
      setListaEnfermedades(data.Enfermedades || []);
  
      setCorreo(data.CorreoElectronico);
      setTelefono(data.Telefono);
      setDireccion(data.Direccion);
  
      setContactos(data.Contactos || []); // Update with actual field from the API
    } catch (error) {
      console.error("Error recuperando datos de estudiante:", error);
    }
  };



  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
        {/* Información personal */}
        <div className="bg-white py-8 px-8 md:px-[10%] lg:px-[16%] rounded-md shadow-sm flex flex-col justify-between">
          <div className="mb-4 rounded-full border-2 overflow-hidden mx-auto border-[#FF6600] w-24 h-24 md:w-32 md:h-32">
            <img src={foto || "default-profile.png"} alt="Foto del estudiante" className="w-full h-auto" />
          </div>
          <LabelItem label="Cédula" data={cedula} />
          <LabelItem label="Nombre Completo" data={nombre} />
          <button onClick={() => fetchEstudiante()} >Sexo</button>
          <LabelItem label="Fecha de Nacimiento" data={fecha} />
          <LabelItem label="Carrera" data={carrera} />
        </div>

        {/* Información médica */}
        <div className="bg-white p-6 md:p-8 rounded-md shadow-sm flex flex-col justify-between">
          <LabelIconItem label="Acepta Transfusiones:" data={isTransfusiones} icon={GiMedicalDrip} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 lg:gap-5 xl:gap-[4%] 2xl:gap-20 mb-4">
            <LabelIconItem label="Tipo de sangre:" data={tipoSangre} icon={FaTint} />
            <LabelIconItem label="Donante:" data={isDonante} icon={FaHandHoldingHeart} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 lg:gap-5 xl:gap-[4%] 2xl:gap-20 mb-4">
            <div className="bg-[#EAEEF1] shadow-md rounded-md w-full flex flex-col items-center p-4">
              <LabelIconItem label="Alergias" icon={GiNoseSide} />
              <ul className="text-[#1E1E1E] font-bold self-start">
                {listaAlergias.length > 0 ? listaAlergias.map((item, index) => <li key={index}>{item}</li>) : <li>No hay alergias</li>}
              </ul>
            </div>
            <div className="bg-[#EAEEF1] shadow-md rounded-md w-full flex flex-col items-center p-4">
              <LabelIconItem label="Medicamentos" icon={FaPrescriptionBottle} />
              <ul className="text-[#1E1E1E] font-bold self-start">
                {listaMedicamentos.length > 0 ? listaMedicamentos.map((item, index) => <li key={index}>{item}</li>) : <li>No hay medicamentos</li>}
              </ul>
            </div>
          </div>

          {/* Enfermedades crónicas */}
          <div className="bg-[#EAEEF1] shadow-md rounded-md w-full flex flex-col items-center p-4 flex-grow">
            <LabelIconItem label="Enfermedades crónicas" icon={FaStethoscope} />
            <ul className="text-[#1E1E1E] font-bold self-start">
              {listaEnfermedades.length > 0 ? listaEnfermedades.map((item, index) => <li key={index}>{item}</li>) : <li>No hay enfermedades crónicas</li>}
            </ul>
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div className="bg-white p-4 md:p-8 lg:px-[8%] rounded-md shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LabelIconItem label="Correo:" data={correo} icon={MdEmail} />
          <LabelIconItem label="Teléfono:" data={telefono} icon={MdPhoneIphone} />
        </div>
        <LabelIconItem label="Dirección:" data={direccion} icon={FaMapMarkedAlt} />
        <LabelIconItem label="Contactos de emergencia:" data={JSON.stringify(contactos)} icon={MdContacts} />
      </div>
    </div>
  );
}