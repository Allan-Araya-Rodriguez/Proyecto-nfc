import React from 'react';
import { useFormulario } from '../context/FormularioContext'; // Importa el contexto
import InputField from '../components/input';
import InputSelect from '../components/SelectField';
import { User, IdCard, UserPlus, Calendar } from 'lucide-react';

function FormularioRegistro() {
    // Accede al estado global del formulario y la función para actualizarlo
    const { formulario, setFormulario } = useFormulario();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    return (
        <form>
            <div className="grid grid-cols-2 gap-x-4">
                <InputField
                    name="cedula"
                    label="Cédula"
                    placeholder="Ingrese su Cédula"
                    type="text"
                    Icon={IdCard}
                    value={formulario.cedula}
                    onChange={handleChange}
                />
                <InputField
                    name="nombre"
                    label="Nombre"
                    placeholder="Ingrese su Nombre"
                    type="text"
                    Icon={User}
                    value={formulario.nombre}
                    onChange={handleChange}
                />
                <InputField
                    name="primerApellido"
                    label="Primer Apellido"
                    placeholder="Ingrese su Primer Apellido"
                    type="text"
                    Icon={UserPlus}
                    value={formulario.primerApellido}
                    onChange={handleChange}
                />
                <InputField
                    name="segundoApellido"
                    label="Segundo Apellido"
                    placeholder="Ingrese su Segundo Apellido"
                    type="text"
                    Icon={UserPlus}
                    value={formulario.segundoApellido}
                    onChange={handleChange}
                />
                <InputField
                    name="fechaNacimiento"
                    label="Fecha de Nacimiento"
                    placeholder="Seleccione su fecha de nacimiento"
                    type="date"
                    Icon={Calendar}
                    value={formulario.fechaNacimiento}
                    onChange={handleChange}
                />
                <InputSelect
                    name="carrera"
                    label="Seleccione su carrera"
                    placeholder="Elija una carrera"
                    options={['ITI', 'GAE', 'IGA', 'ISOA']}
                    value={formulario.carrera}
                    onChange={handleChange}
                />
                <label className="block text-gray-700 font-semibold text-xs mb-2">Foto</label>
            </div>
        </form>
    );
}

export default FormularioRegistro;
