import { FC } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectFieldProps {
    name: string;
    label: string;
    placeholder: string;
    options: string[];
}

const SelectField: FC<SelectFieldProps> = ({ name, label, placeholder, options }) => {
    return (
        <div className="mb-2">
            <label htmlFor={name} className="block text-gray-700 font-semibold text-xs mb-2">{label}</label>
            <div className="relative w-full">
                <select
                    name={name}
                    className="w-full border border-gray-300  rounded focus:ring-0 text-sm pr-10 pl-3 focus:outline-none appearance-none"
                    defaultValue=""
                    style={{ height: '40px' }}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
        </div>
    );
};

export default SelectField;
