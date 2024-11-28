import { useState } from 'react';
import TarjetaMedica from './components/TarjetaMedica';
import styles from './layouts/card.module.css'; // Importa el CSS como módulo

function App() {
  return (
    <div className={styles.App}> {/* Aplica el CSS solo a este div */}
      <TarjetaMedica />
    </div>
  );
}

export default App;
