import React from 'react';

const TarjetaMedica = ({ 
  name = "Luis Carlos",
  cedula = "505630734",
  bloodType = "O+",
  chronicDiseases = ["Diabetes tipo 2", "Hipertension"],
  allergies = ["Maní", "Penicilina"],
  medications = ["Paracetamol", "Diazepam"],
  emergencyContacts = [
    { name: "Ana Martinez", relation: "Esposa", phone: "6548-2576" },
    { name: "Andres Barrantes", relation: "Hermano", phone: "8649-2514" }
  ],
  phone = "6524-8695",
  career = "Ingeniería en Tecnologías de Información",
  email = "LuisCarlos2024@gmail.com",
  isDonor = false
}) => {
  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative bg-primary p-4 flex items-center gap-4 overflow-hidden">
  <div 
     className="absolute top-0 right-0 w-14 h-24 bg-secondary" 
    style={{ clipPath: 'polygon(120% 0, 0 0, 100% 87%)' }}
  ></div>

  <div className="relative z-10 flex items-center gap-4 w-full">
    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
      <img
        src="/images/logo.jpg"
        alt="Foto de perfil"
        className="w-full h-full object-cover"
      />
    </div>
          <div className="text-white">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm opacity-90">Cedula: {cedula}</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-blue-50/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="font-semibold text-gray-700">Información Médica</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 2 22 6 12 16h-4v-4L18 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-blue-600">Tipo de sangre:</span>
              <span>{bloodType}</span>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-blue-600">Enfermedades crónicas:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {chronicDiseases.map((disease, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {disease}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 9v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-blue-600">Alergias:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {allergies.map((allergy, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {allergy}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M19 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 9v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="font-semibold text-gray-700">Medicamentos</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {medications.map((medication, index) => (
              <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                {medication}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-orange-50/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="font-semibold text-gray-700">Números de Emergencia</h3>
          </div>
          <div className="space-y-2">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{contact.name} ({contact.relation})</span>
                <span className="text-blue-600">{contact.phone}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-50/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="font-semibold text-gray-700">Información Personal</h3>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="break-all">{phone}</span>
            </div>
            <div className="flex gap-2 items-start">
              <svg className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 20h9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="break-all">{career}</span>
            </div>
            <div className="flex gap-2 items-center">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m22 6-10 7L2 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="break-all">{email}</span>
            </div>
            <div className="flex gap-2 items-center">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Donante: {isDonor ? 'Sí' : 'No'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaMedica;