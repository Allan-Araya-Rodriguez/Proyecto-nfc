import { useState } from 'react';
import InputField from '../components/input'; 
import InputSelect from '../components/SelectField';
import { User, IdCard, UserPlus, Calendar } from 'lucide-react'; 

function FormularioRegistro() {
    const [cedula, setCedula] = useState('343');
    const [nombre, setNombre] = useState('allan');
    const [primerApellido, setPrimerApellido] = useState('');
    const [segundoApellido, setSegundoApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [carrera, setCarrera] = useState('');

    return (
        <form>
            <div className="grid grid-cols-2 gap-x-4">
                <InputField
                    name="cedula"
                    label="Cédula"
                    placeholder="Ingrese su Cédula"
                    type="text"
                    Icon={IdCard}
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)} 
                />
                <InputField
                    name="nombre"
                    label="Nombre"
                    placeholder="Ingrese su Nombre"
                    type="text"
                    Icon={User}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} 
                />
                <InputField
                    name="primerApellido"
                    label="Primer Apellido"
                    placeholder="Ingrese su Primer Apellido"
                    type="text"
                    Icon={UserPlus}
                    value={primerApellido}
                    onChange={(e) => setPrimerApellido(e.target.value)} 
                />
                <InputField
                    name="segundoApellido"
                    label="Segundo Apellido"
                    placeholder="Ingrese su Segundo Apellido"
                    type="text"
                    Icon={UserPlus}
                    value={segundoApellido}
                    onChange={(e) => setSegundoApellido(e.target.value)} 
                />
                <InputField
                    name="fechaNacimiento"
                    label="Fecha de Nacimiento"
                    placeholder="Seleccione su fecha de nacimiento"
                    type="date"
                    Icon={Calendar}
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)} 
                />
                <InputSelect
                    name="carrera"
                    label="Seleccione su carrera"
                    placeholder="Elija una carrera"
                    options={['ITI', 'GAE', 'IGA', 'ISOA']}
                />
                <label className="tblock text-gray-700 font-semibold text-xs mb-2">Foto</label>
            </div>
        </form>
    );
}

export default FormularioRegistro;
