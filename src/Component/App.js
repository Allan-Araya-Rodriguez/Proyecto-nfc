import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './Component/Registro';


function App() {
  return (
    <Router> 
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Registro />} />
            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

