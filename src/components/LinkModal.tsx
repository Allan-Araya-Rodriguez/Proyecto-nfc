import React, { useState } from 'react';

interface LabelLinkModal {
    label: string;
    title: string;
    data: string[];
}

export default function LinkModal({ label, title, data }: LabelLinkModal) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Evita cerrar el modal si el clic ocurre dentro del contenido del modal
        if ((e.target as HTMLElement).id === 'modal-overlay') {
            closeModal();
        }
    };

    return (
        <>
            {/* Botón para abrir el modal */}
            <a className="my-2 cursor-pointer text-[#003973] font-bold hover:underline text-center block" onClick={toggleModal}>
                {label}
            </a>

            {/* Modal */}
            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 z-10 flex items-center justify-center bg-zinc-950/75"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                    onClick={handleOverlayClick}
                >
                    {/* Contenido del modal */}
                    <div className="relative border-2 border-[#626B6B] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="p-0">
                            <div className='w-full flex'>
                                <div className='flex-1 relative bg-[#003973] text-white py-3 px-4 md:px-[10%] lg:px-10 items-center text-xl md:text-3xl'>
                                    {title}
                                </div>
                                <div className='header-clip flex-none w-[60px] h-[60px] absolute right-[0px] md:block hidden'></div>
                            </div>
                            
                            <div className='bg-white px-4 py-4 sm:p-6 sm:py-4'>
                                <div className="sm:flex sm:items-start">
                                    <div className="text-left w-full grid gap-y-3">
                                        {data && data.length > 0 ? (
                                            data.map((item) => (
                                                <div className='bg-[#EAEEF1] text-[#1E1E1E] w-full px-3 py-4 rounded-md'>
                                                    {item}
                                                </div>
                                            ))
                                        ) : (
                                            <div className='bg-[#EAEEF1] text-[#1E1E1E] w-full px-3 py-4 rounded-md'>
                                                Sin datos
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
