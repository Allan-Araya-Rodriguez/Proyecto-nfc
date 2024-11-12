import InputField from '../components/input'; 
import InputSelect from '../components/SelectField';
import { User, IdCard, UserPlus, Calendar } from 'lucide-react'; 

function FormularioRegistro() {
    return (
        <form>
            <div className="grid grid-cols-2 gap-x-4">
                <InputField
                    name="cedula"
                    label="Cédula"
                    placeholder="Ingrese su Cédula"
                    type="text"
                    Icon={IdCard}
                />
                <InputField
                    name="nombre"
                    label="Nombre"
                    placeholder="Ingrese su Nombre"
                    type="text"
                    Icon={User}
                />
                <InputField
                    name="primerApellido"
                    label="Primer Apellido"
                    placeholder="Ingrese su Primer Apellido"
                    type="text"
                    Icon={UserPlus}
                />
                <InputField
                    name="segundoApellido"
                    label="Segundo Apellido"
                    placeholder="Ingrese su Segundo Apellido"
                    type="text"
                    Icon={UserPlus}
                />

                <InputField
                    name="fechaNacimiento"
                    label="Fecha de Nacimiento"
                    placeholder="Seleccione su fecha de nacimiento"
                    type="date"
                    Icon={Calendar}
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
