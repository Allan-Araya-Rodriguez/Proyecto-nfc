import { useState } from "react";
import { FaStethoscope, FaHandHoldingHeart, FaPrescriptionBottle, FaTint, FaMapMarkedAlt } from "react-icons/fa";
import { GiNoseSide } from "react-icons/gi";
import { MdEmail, MdContacts, MdPhoneIphone } from "react-icons/md";
import LabelItem from '../components/LabelItem';
import LabelIconItem from '../components/LabelIconItem';
import LinkModal from '../components/LinkModal';
import { GiMedicalDrip } from "react-icons/gi";
import Headers from "../components/header";

export default function Vista() {
    const [foto, setFoto] = useState('');
    const [cedula, setCedula] = useState('504450326');
    const [nombre, setNombre] = useState('Andrés Sandoval Herrera');
    const [fecha, setFecha] = useState('09/09/2002');
    const [carrera, setCarrera] = useState('ITI');

    const [isTransfusiones, setIsTransfusiones] = useState('Si');
    const [tipoSangre, setTipoSangre] = useState('0-A');
    const [isDonante, setIsDonante] = useState('Si');

    const [listaAlergias, setListaAlergias] = useState([
        'Maní',
        'Penisilina',
    ]);
    const [listaMedicamentos, setListaMedicamentos] = useState([
        'Paracetamol',
        'Diazepam',
    ]);
    const [listaEnfermedades, setListaEnfermedades] = useState([
        'Diabetes tipo 2',
    ]);

    const [correo, setCorreo] = useState('asandovalhe@est.utn.ac.cr');
    const [telefono, setTelefono] = useState('84115770');
    const [direccion, setDireccion] = useState('Liberia, Condega, 100mts norte del Soccer Center');
    const [contactos, setContactos] = useState([
        { name: "Contacto 1", phone: "1234 5678" },
        { name: "Contacto 2", phone: "1234 5679" },
    ]);
    
    return (
        <div className="min-h-screen flex flex-col">
             <Headers />
        
        <div className='flex-grow px-4 md:px-8 lg:px-[16%] py-10 bg-[#F2F2F2]'>
      
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                
                {/* Información personal */}
                <div className="bg-white py-8 px-8 md:px-[10%] lg:px-[16%] rounded-md shadow-sm flex flex-col justify-between">
                    <div className="mb-4 rounded-full border-2 overflow-hidden mx-auto border-[#FF6600] w-24 h-24 md:w-32 md:h-32">
                        <img src={foto} alt="" className="w-full h-auto" />
                    </div>
                    <LabelItem label="Cédula" data={cedula} />
                    <LabelItem label="Nombre Completo" data={nombre} />
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
                                {listaAlergias && listaAlergias.length > 0 ? (
                                    listaAlergias.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                ) : (
                                    <li>No hay alergias</li>
                                )}
                            </ul>
                            {listaAlergias && listaAlergias.length > 0 ? (
                                <LinkModal label="Ver alergias" title="Alergias" data={listaAlergias} />
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="bg-[#EAEEF1] shadow-md rounded-md w-full flex flex-col items-center p-4">
                            <LabelIconItem label="Medicamentos" icon={FaPrescriptionBottle} />
                            <ul className="text-[#1E1E1E] font-bold self-start">
                                {listaMedicamentos && listaMedicamentos.length > 0 ? (
                                    listaMedicamentos.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                ) : (
                                    <li>No hay medicamentos</li>
                                )}
                            </ul>
                            {listaMedicamentos && listaMedicamentos.length > 0 ? (
                                <LinkModal label="Ver medicamentos" title="Medicamentos" data={listaMedicamentos} />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>

                    {/* Enfermedades crónicas */}
                    <div className="bg-[#EAEEF1] shadow-md rounded-md w-full flex flex-col items-center p-4 flex-grow">
                        <LabelIconItem label="Enfermedades crónicas" icon={FaStethoscope} />
                        <ul className="text-[#1E1E1E] font-bold self-start">
                            {listaEnfermedades && listaEnfermedades.length > 0 ? (
                                listaEnfermedades.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            ) : (
                                <li>No hay enfermedades crónicas</li>
                            )}
                        </ul>
                        {listaEnfermedades && listaEnfermedades.length > 0 ? (
                            <LinkModal label="Ver enfermedades crónicas" title="Enfermedades crónicas" data={listaEnfermedades} />
                        ) : (
                            <></>
                        )}
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
                <LabelIconItem label="Contactos de emergencia:" data={contactos} icon={MdContacts} />
            </div>
        </div>
        </div>
    );
}
