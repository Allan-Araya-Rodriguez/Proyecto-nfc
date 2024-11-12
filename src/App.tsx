import Header from './layouts/Header';
import Body from './layouts/Body';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vista from './pages/Vista';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/vista" element={<Body page={Vista} />} /> {/* La página de 'vista' */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;