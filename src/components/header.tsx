import logo from '../assets/image.svg';

function Headers() {
    return (
        <header className="bg-primary flex items-center justify-center p-4 h-16 relative">
            <img src={logo} alt="Logo" className="h-10 absolute left-4" />
            <h1 className="text-blue-50 font-serif text-center text-2xl  font-bold">MiSaludUTN</h1>
        </header>
    );
}

export default Headers;
