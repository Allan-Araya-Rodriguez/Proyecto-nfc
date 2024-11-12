import logo from '../images/logo-utn-blanco.png';

export default function Header() {
    return (
        <header className="bg-[#003973] text-white py-3 px-4 md:px-[10%] lg:px-10 w-full flex items-center text-xl md:text-3xl">
            {/* Logo */}
            <div className="flex-none mr-4 sm:mr-6">
                <img src={logo} alt="Logo UTN" className="h-8 md:h-12 w-auto max-h-12" />
            </div>
            {/* Título */}
            <div className="flex-grow text-center">
                <span className="text-lg sm:text-xl md:text-2xl font-bold">MiSaludUTN</span>
            </div>
        </header>
    );
}
