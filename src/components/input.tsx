import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
    name: string;
    label: string;
    placeholder: string;
    Icon: LucideIcon;
    type: 'text' | 'date';
}

const InputField: FC<InputFieldProps> = ({ name, label, placeholder, Icon, type }) => {
    return (
        <div className="mb-2">
            <label htmlFor={name} className="block text-gray-700 font-semibold text-xs mb-2">{label}</label>
            <div className="flex items-center border border-gray-300 rounded" style={{ width: '100%', height: '40px' }}>
                <Icon className="text-secondary mx-3" size={17} />

                {type === 'date' ? (
                    <input
                        type="date"
                        name={name}
                        className="w-full border-0 rounded-lg focus:ring-0 text-xs pr-8 focus:outline-none"
                        placeholder={placeholder}
                        style={{ height: '100%' }}
                    />
                ) : (
                    <input
                        type="text"
                        name={name}
                        className="w-full border-0 rounded-lg px-2 focus:ring-0 text-xs focus:outline-none"
                        placeholder={placeholder}
                        style={{ height: '100%' }}
                    />
                )}
            </div>
        </div>
    );
};

export default InputField;
