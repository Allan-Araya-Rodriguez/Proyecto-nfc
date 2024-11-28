import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipo para las enfermedades y alergias
interface Item {
    id: number;
    name: string;
}

interface FormularioState {
    // Campos del formulario de Crear1
    cedula: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    fechaNacimiento: string;
    carrera: string;

    // Campos del formulario de Crear2
    tipoSangre: string;
    acceptsTransfusions: boolean;
    isDonor: boolean;
    medicamentos: string;

    // Campos del formulario de Crear3
    correo: string;
    telefonoPersonal: string;
    telefonoEmergencia: string;
    direccion: string;

    // Campos adicionales para enfermedades y alergias
    enfermedades: Item[];
    alergias: Item[];
}

// Tipo para el contexto
interface FormularioContextProps {
    formulario: FormularioState;
    setFormulario: React.Dispatch<React.SetStateAction<FormularioState>>;
    agregarEnfermedad: (enfermedad: string) => void;
    agregarAlergia: (alergia: string) => void;
    eliminarEnfermedad: (id: number) => void;
    eliminarAlergia: (id: number) => void;
    editarEnfermedad: (id: number, newName: string) => void;
    editarAlergia: (id: number, newName: string) => void;
}

// Crear el contexto
const FormularioContext = createContext<FormularioContextProps | undefined>(undefined);

// Proveedor del contexto
export const FormularioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formulario, setFormulario] = useState<FormularioState>({
        cedula: '',
        nombre: '',
        primerApellido: '',
        segundoApellido: '',
        fechaNacimiento: '',
        carrera: '',
//----------------------------------------
        tipoSangre: '',
        acceptsTransfusions: false,
        isDonor: false,
        medicamentos: '',
//----------------------------------------
        correo: '',
        telefonoPersonal: '',
        telefonoEmergencia: '',
        direccion: '',
//----------------------------------------
        enfermedades: [],
        alergias: []
    });

    const agregarEnfermedad = (enfermedad: string) => {
        if (enfermedad.trim()) {
            setFormulario((prevFormulario) => ({
                ...prevFormulario,
                enfermedades: [...prevFormulario.enfermedades, { id: Date.now(), name: enfermedad }]
            }));
        }
    };

    const agregarAlergia = (alergia: string) => {
        if (alergia.trim()) {
            setFormulario((prevFormulario) => ({
                ...prevFormulario,
                alergias: [...prevFormulario.alergias, { id: Date.now(), name: alergia }]
            }));
        }
    };

    const editarEnfermedad = (id: number, newName: string) => {
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            enfermedades: prevFormulario.enfermedades.map((item) =>
                item.id === id ? { ...item, name: newName } : item
            )
        }));
    };

    const editarAlergia = (id: number, newName: string) => {
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            alergias: prevFormulario.alergias.map((item) =>
                item.id === id ? { ...item, name: newName } : item
            )
        }));
    };

    const eliminarEnfermedad = (id: number) => {
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            enfermedades: prevFormulario.enfermedades.filter((item) => item.id !== id)
        }));
    };

    const eliminarAlergia = (id: number) => {
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            alergias: prevFormulario.alergias.filter((item) => item.id !== id)
        }));
    };

    return (
        <FormularioContext.Provider
            value={{
                formulario,
                setFormulario,
                agregarEnfermedad,
                agregarAlergia,
                eliminarEnfermedad,
                eliminarAlergia,
                editarEnfermedad,
                editarAlergia
            }}
        >
            {children}
        </FormularioContext.Provider>
    );
};

// Hook para usar el contexto en cualquier componente
export const useFormulario = (): FormularioContextProps => {
    const context = useContext(FormularioContext);
    if (!context) {
        throw new Error('useFormulario debe usarse dentro de un FormularioProvider');
    }
    return context;
};
