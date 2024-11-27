import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './Tabla';
import Crear1 from './pages/crear1';
import Crear2 from './pages/crear2';
import Crear3 from './pages/crear3';
import Vista from './pages/Vista';
import RegistroEnfermedadesYAlergias from './pages/enfermedadesAlergias';
import Body from './layouts/Body';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/crear1",
    element: <Crear1 />,
  },
  {
    path: "/crear2",
    element: <Crear2 />,
  },
  {
    path: "/crear3",
    element: <Crear3 />,
  },
  {
    path: "/crear4",
    element: <RegistroEnfermedadesYAlergias />,
  },
  {
    path: "/vista",
    element: <Vista />,
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
