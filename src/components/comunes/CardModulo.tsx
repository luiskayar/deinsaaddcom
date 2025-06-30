import React from 'react';

interface CardModuloProps {
  titulo: string;
  descripcion: string;
  icono?: string;
}

export default function CardModulo({ titulo, descripcion, icono }: CardModuloProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {icono && <div className="text-4xl mb-4">{icono}</div>}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{titulo}</h3>
      <p className="text-gray-600">{descripcion}</p>
    </div>
  );
} 