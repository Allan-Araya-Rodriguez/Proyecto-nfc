import React, { useState } from 'react';

const MenuBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Informacion personal');

  return (
    <div className="bg-background text-white p-1 rounded-sm mx-10 mt-8 text-sm flex justify-center">
      <div className="flex w-full justify-between space-x-1">
        <button
          className={`px-3 py-1 w-full ${activeTab === 'Informacion personal' ? 'text-primary bg-white font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Informacion personal')}
        >
          Información Personal
        </button>
        <button
          className={`px-3 py-1 w-full ${activeTab === 'gg' ? 'text-primary bg-white font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('gg')}
        >
          Información Medica
        </button>
        <button
          className={`px-3 py-1 w-full ${activeTab === 'hh' ? 'text-primary bg-white font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('hh')}
        >
          Contacto y adicionales
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
