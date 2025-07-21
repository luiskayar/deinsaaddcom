"use client";

import TituloSeccion from '@/components/comunes/TituloSeccion';
import { useRouter} from 'next/navigation';
import {  FormEvent , useEffect, useRef } from 'react'
import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import { ArticlePreview } from '@/components/index'
useEffect

export default function FormSearchNews() {

    const inputRef = useRef<HTMLInputElement>(null);
    const [noticias, setNoticias] = useState<any[]>([]);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const busqueda = inputRef.current?.value.trim() ?? '';

        obtener_noticias(busqueda)
    }

    async function obtener_noticias(busqueda:string) {
    
    try {
            
            const res = await fetch(`http://localhost:3000/api/news?q=${busqueda}`)

            if (!res.ok) throw new Error('Error al cargar la noticia')

            const raw = await res.json()

            const noticiasF = raw.map((item: any) => ({ 
                id: item.id,
                title: item.title,
                description: item.description,  
                images:
                typeof item.images === 'string' ? item.images:
                typeof item.imagess === 'string' ? item.imagess:
                typeof item.ddd === 'string' ? item.ddd:
                typeof item.image === 'string' ? item.image:
                '',
            }))

            setNoticias(noticiasF)

        } catch (error) {
            console.log(error);
            
        }

    }
    console.log('notis');
    
    

    useEffect(() => {
        obtener_noticias("")
    }, [])
    

    return (

        <div>

            <form onSubmit={onSubmit} >
                <input ref={inputRef} type='text' placeholder='Buscar noticias'
                className="border p-2 rounded-l-md w-64 focus:outline-none text-black"/>
                <button type='submit'  className="bg-black text-white px-4 py-2 rounded-r-md">
                    Buscar
                </button>
            </form>

            {/* Artículos Destacados */}
            <TituloSeccion titulo="Artículos Relevantes para el Sector Público y Financiero" nivel={2} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-6">      
        
                {noticias.map((art) => (
                    <ArticlePreview
                      titulo={art.title}
                      extracto={art.description}
                      link={art.id}
                      alt={art.images}
                      src={art.images}
                      
                    />
                ))}
            </div>    
        </div>
    )
}
