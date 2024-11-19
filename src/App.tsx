
import './App.css'

function App() {
  
  return (
    <>
     <div className="App">
     
     <div className="bg-primary py-3" id="containerHeader">
       <div className="container d-flex align-items-center justify-content-center">
         <h1 className="m-0 text-center text-white">Mi SaludUTN</h1>
       </div>
     </div>    
     <div className="container bg-white mt-5 p-4 rounded shadow">
     
       <div className="bg-primary py-2 px-3 rounded mb-4">
         <h2 className="text-white m-0">Gestión de Perfiles Médicos</h2>
       </div>

    
       <div className="row align-items-center mb-3">
         <div className="col-md-4">
           <h3 className="mb-0">Perfiles Registrados</h3>
         </div>
         <div className="col-md-5">
           <div className="input-group">
             <span className="input-group-text" id="search-icon">
               <i className="bi bi-search"></i>
             </span>
             <input
               type="text"
               className="form-control"
               placeholder="Buscar..."
               aria-label="Buscar"
               aria-describedby="search-icon"
             />
           </div>
         </div>
         <div className="col-md-3 text-end">
           <a href="#" className="btn btn-primary">
             <i className="bi bi-plus-lg"></i> Crear Nuevo Perfil
           </a>
         </div>
       </div>       
       <table className="table table-striped table-hover align-middle">
         <thead className="">
           <tr>
             <th scope="col">Cédula</th>
             <th scope="col">Nombre</th>
             <th scope="col">Tipo de Sangre</th>
             <th scope="col">Alergias</th>
             <th scope="col">Enfermedades Crónicas</th>
             <th scope="col">Acción</th>
           </tr>
         </thead>
         <tbody>
         <tr>              
             <td>5534535</td>
             <td>Allan Araya</td>
             <td>o+</td>
             <td>Aspirina</td>
             <td>Diabetes tipo 2</td>
             <td>
             <div className="dropdown">
                   <button
                     className="btn  p-0"
                     type="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                   >
                     <i className="bi bi-three-dots-vertical"></i>
                   </button>
                   <ul className="dropdown-menu">
                     <li>
                       <a className="dropdown-item" href="#">
                         Ver Detalles
                       </a>
                     </li>
                     <li>
                       <a className="dropdown-item" href="#">
                         Editar
                       </a>
                     </li>
                     <li>
                       <a className="dropdown-item text-danger" href="#">
                         Eliminar
                       </a>
                     </li>
                   </ul>
                 </div>
               </td>
           </tr>
           <tr>              
             <td>5534535</td>
             <td>Allan Araya</td>
             <td>o+</td>
             <td>Aspirina</td>
             <td>Diabetes tipo 2</td>
             <td>
             <div className="dropdown">
                   <button
                     className="btn  p-0"
                     type="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                   >
                     <i className="bi bi-three-dots-vertical"></i>
                   </button>
                   <ul className="dropdown-menu">
                     <li>
                       <a className="dropdown-item" href="#">
                         Ver Detalles
                       </a>
                     </li>
                     <li>
                       <a className="dropdown-item" href="#">
                         Editar
                       </a>
                     </li>
                     <li>
                       <a className="dropdown-item text-danger" href="#">
                         Eliminar
                       </a>
                     </li>
                   </ul>
                 </div>
               </td>
           </tr>
           <tr>              
             <td>5534535</td>
             <td>Allan Araya</td>
             <td>o+</td>
             <td>Aspirina</td>
             <td>Diabetes tipo 2</td>
             <td>
             <div className="dropdown">
                   <button
                     className="btn  p-0"
                     type="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                   >
                     <i className="bi bi-three-dots-vertical"></i>
                   </button>
                   <ul className="dropdown-menu">
                     <li>
                       <a className="dropdown-item" href="#">
                         Ver Detalles
                       </a>
                     </li>
                     <li>
                       <a className="dropdown-item" href="#">
                         Editar
                       </a>
                     </li>
                     <li>
                       <a className="dropdown-item text-danger" href="#">
                         Eliminar
                       </a>
                     </li>
                   </ul>
                 </div>
               </td>
           </tr>
           <tr>              
             <td>5534535</td>
             <td>Allan Araya</td>
             <td>o+</td>
             <td>Aspirina</td>
             <td>Diabetes tipo 2</td>
             <td>
             <div className="dropdown">
                   <button
                     className="btn  p-0"
                     type="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                   >
                     <i className="bi bi-three-dots-vertical"></i>
                   </button>
                   <ul className="dropdown-menu">
                     <li>
                       <a className="dropdown-item" href="#">
                         Ver Detalles
                       </a>
                     </li>
                     <li>
                       <a className="dropdown-item" href="#">
                         Editar
                       </a>
                     </li>
                     <li>
                       <a className="dropdown-item text-danger" href="#">
                         Eliminar
                       </a>
                     </li>
                   </ul>
                 </div>
               </td>
           </tr>
         </tbody>
       </table>
     </div>
   </div>
    </>
  )
}

export default App
