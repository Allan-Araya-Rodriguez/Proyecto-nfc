// TableWithActions.tsx
import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

type RowData = {
  id: number;
  name: string;
  email: string;
};

const data: RowData[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
  { id: 2, name: 'Ana Gómez', email: 'ana@example.com' },
  { id: 3, name: 'Carlos López', email: 'carlos@example.com' },
];

const TableWithActions: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleAction = (action: string, id: number) => {
    switch (action) {
      case 'view':
        alert(`Ver detalles de la fila con ID: ${id}`);
        break;
      case 'edit':
        alert(`Editar fila con ID: ${id}`);
        break;
      case 'delete':
        alert(`Eliminar fila con ID: ${id}`);
        break;
      default:
        break;
    }
    setOpenDropdown(null);
  };

  return (
    <div className="">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Nombre</th>
            <th className="px-4 py-2 border-b">Correo</th>
            <th className="px-4 py-2 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2 border-b">{row.id}</td>
              <td className="px-4 py-2 border-b">{row.name}</td>
              <td className="px-4 py-2 border-b">{row.email}</td>
              <td className="px-4 py-2 border-b text-right">
                <button
                  onClick={() => handleDropdownToggle(row.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <MoreHorizontal size={20} />
                </button>
                {openDropdown === row.id && (
                  <div className="absolute bg-white border border-gray-200 shadow-md rounded mt-2">
                    <button
                      onClick={() => handleAction('view', row.id)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => handleAction('edit', row.id)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleAction('delete', row.id)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithActions;
