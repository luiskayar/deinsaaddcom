import React from 'react';

interface TituloSeccionProps {
  titulo: string;
  nivel?: 1 | 2;
}

export default function TituloSeccion({ titulo, nivel = 1 }: TituloSeccionProps) {
  if (nivel === 2) {
    return (
      <h2 className="text-2xl font-bold text-blue-700 mb-4 border-b border-blue-200 pb-1">
        {titulo}
      </h2>
    );
  }
  return (
    <h1 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
      {titulo}
    </h1>
  );
} 