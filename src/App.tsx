import { useState } from 'react';
import TarjetaMedica from './components/TarjetaMedica';
import './layouts/card.css';

function App() {
  return (
    <div className="App m-auto p-[2rem]">
      <TarjetaMedica />
    </div>
  );
}

export default App;