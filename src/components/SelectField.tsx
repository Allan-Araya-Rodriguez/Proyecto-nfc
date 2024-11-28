import { FC } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectFieldProps {
    name: string;
    label: string;
    placeholder: string;
    options: string[];
    value: string; // Nueva propiedad para enlazar el valor actual
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Nueva propiedad para manejar el cambio
}

const SelectField: FC<SelectFieldProps> = ({ name, label, placeholder, options, value, onChange }) => {
    return (
        <div className="mb-2">
            <label htmlFor={name} className="block text-gray-700 font-semibold text-xs mb-2">
                {label}
            </label>
            <div className="relative w-full">
                <select
                    name={name}
                    className="w-full border border-gray-300 rounded focus:ring-0 text-sm pr-10 pl-3 focus:outline-none appearance-none"
                    value={value} // Enlaza el valor del contexto
                    onChange={onChange} // Maneja el cambio
                    style={{ height: '40px' }}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                />
            </div>
        </div>
    );
};

export default SelectField;
