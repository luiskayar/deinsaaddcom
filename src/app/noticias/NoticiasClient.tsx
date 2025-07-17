'use client';

import React, { useState, useEffect } from 'react';
import TituloSeccion from '@/components/comunes/TituloSeccion';
import { ArticlePreview } from '@/components/index';

interface Noticia {
    id: string;
    title: string;
    description: string;
    image: string;
    category?: string;
    slug: string;
}

const categorias = [
    { key: 'todas', label: 'Todas las Categorías' },
    { key: 'gestion de riesgos', label: 'Gestión de Riesgos' },
    { key: 'cumplimiento normativo', label: 'Cumplimiento Normativo' },
    { key: 'planificacion estrategica', label: 'Planificación Estratégica' },
    { key: 'gestion del desempeño', label: 'Gestión del Desempeño' },
    { key: 'tecnologia y saas', label: 'Tecnología y SaaS' },
    { key: 'casos de exito', label: 'Casos de Éxito' },
    { key: 'sector publico', label: 'Sector Público' },
    { key: 'sector financiero', label: 'Sector Financiero' },
];

interface NoticiasClientProps {
    noticiasIniciales: Noticia[];
}

export default function NoticiasClient({ noticiasIniciales }: NoticiasClientProps) {
    const [noticias] = useState<Noticia[]>(noticiasIniciales);
    const [noticiasFiltradas, setNoticiasFiltradas] = useState<Noticia[]>(noticiasIniciales);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('todas');
    const [busqueda, setBusqueda] = useState<string>('');

    useEffect(() => {
        let resultado = noticias;

        if (categoriaSeleccionada !== 'todas') {
            resultado = resultado.filter(
                (n) => n.category?.toLowerCase() === categoriaSeleccionada
            );
        }

        if (busqueda.trim() !== '') {
            const texto = busqueda.toLowerCase();
            resultado = resultado.filter(
                (n) =>
                    n.title.toLowerCase().includes(texto) ||
                    n.description.toLowerCase().includes(texto)
            );
        }

        setNoticiasFiltradas(resultado);
    }, [categoriaSeleccionada, busqueda, noticias]);

    const obtenerConteoCategoria = (categoria: string) => {
        if (categoria === 'todas') return noticias.length;
        return noticias.filter((n) => n.category?.toLowerCase() === categoria).length;
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Sidebar de categorías */}
                <aside className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700">Categorías</h2>
                    <div className="flex flex-col gap-2">
                        {categorias.map((cat) => {
                            const conteo = obtenerConteoCategoria(cat.key);
                            const isSelected = categoriaSeleccionada === cat.key;

                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setCategoriaSeleccionada(cat.key)}
                                    className={`text-left px-4 py-2 rounded shadow transition-all duration-200 flex justify-between items-center ${
                                        isSelected ? 'bg-blue-600 text-white' : 'bg-white hover:bg-blue-100'
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span
                                        className={`text-sm px-2 py-1 rounded-full ${
                                            isSelected
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200 text-gray-600'
                                        }`}
                                    >
                                        {conteo}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* Contenido principal */}
                <section className="md:col-span-3 space-y-10">
                    <TituloSeccion
                        titulo="Noticias y Análisis: Liderando la Gobernanza Inteligente y la Gestión de Riesgos"
                        nivel={1}
                    />
                    <p className="text-lg text-gray-700 mb-4 text-center">
                        Explore nuestro blog para mantenerse al día con las últimas tendencias, análisis de expertos y casos de éxito en Gobernanza Corporativa, Software de gestión de riesgos, y transformación digital para la gestión pública y el sector financiero.
                    </p>

                    {/* Input de búsqueda */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Buscar noticias..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Filtro activo */}
                    {(categoriaSeleccionada !== 'todas' || busqueda) && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 flex-wrap">
                                {categoriaSeleccionada !== 'todas' && (
                                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                        {categorias.find((cat) => cat.key === categoriaSeleccionada)?.label}
                                    </span>
                                )}
                                {busqueda && (
                                    <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        Búsqueda: &quot;{busqueda}&quot;
                                    </span>
                                )}
                                <span className="text-gray-600">({noticiasFiltradas.length} artículos)</span>
                            </div>
                            <button
                                onClick={() => {
                                    setCategoriaSeleccionada('todas');
                                    setBusqueda('');
                                }}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    )}

                    {/* Resultados */}
                    {noticiasFiltradas.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {noticiasFiltradas.map((art) => (
                                <ArticlePreview
                                    key={art.id}
                                    titulo={art.title}
                                    extracto={art.description}
                                    link={art.id}
                                    alt={art.image}
                                    src={art.image}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-6xl mb-4">📰</div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron artículos</h3>
                            <p className="text-gray-500">
                                No hay artículos disponibles para la búsqueda o categoría seleccionada.
                            </p>
                            <button
                                onClick={() => {
                                    setCategoriaSeleccionada('todas');
                                    setBusqueda('');
                                }}
                                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                            >
                                Ver todos los artículos
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
