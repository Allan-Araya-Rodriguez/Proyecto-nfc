import React from "react";
import ContactData from '../components/ContactData';

interface Contact {
    name: string;
    phone: string;
}

interface LabelIconItemProps {
    label: string;
    data?: string | Contact[]; // `data` puede ser string o array de contactos
    icon: React.ElementType;
}

export default function LabelIconItem({ label, data, icon: Icon }: LabelIconItemProps) {
    return (
        <div className="flex flex-col md:flex-row items-start space-y-1 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex items-center space-x-2">
                <Icon className="text-[#FF6600] size-6" />
                <span className="font-bold text-[#003973]">{label}</span>
            </div>
            {Array.isArray(data) ? (
                <ContactData contacts={data} />  // Muestra ContactData si `data` es un array
            ) : (
                data && <span className="ml-6 md:ml-0 flex-none">{data}</span> // Muestra un span si `data` es un string
            )}
        </div>
    );
}
