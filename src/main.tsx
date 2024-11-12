import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Crear1 from './pages/crear1';

const router = createBrowserRouter([   
  {
    path: "/",
    element: <App />,   
  },
  {
    path: "/ff",
    element: <Crear1 />,   
  },
  
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
