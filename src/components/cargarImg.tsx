import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const PhotoUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setImage(file);
  };

  const handleClearImage = () => setImage(null);

  return (
    <div className="w-full flex flex-col items-center">
      
      {image ? (
        <div className="flex flex-col items-center w-full">
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded preview"
            className="w-44 h-28 object-cover rounded mb-2"
          />
          <button
            onClick={handleClearImage}
            className="px-3 py-1 text-xs bg-primary text-white rounded hover:bg-blue-600"
          >
            Eliminar
          </button>
        </div>
      ) : (
        <label
          htmlFor="file-input"
          className="border-dashed border-2 border-gray-400 p-4 rounded-sm text-center cursor-pointer w-full h-20 flex flex-col items-center justify-center"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="file-input"
          />
          <Upload size={24} className="mb-2 text-secondary" />
          <span className="text-xs text-gray-500">Subir Foto</span>
        </label>
      )}
    </div>
  );
};

export default PhotoUpload;
