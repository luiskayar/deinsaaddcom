import LinkNote from '../atoms/LinkNote';
import NewsImage from '../atoms/ImageNote';

type Props = {
    titulo: string;
    extracto: string;
    link: string;
    alt: string;
    src: string;
};

export default function ArticlePreview({titulo, extracto, link, alt, src}: Props) {
    return (
        <article className='group relative bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300'>
            {/* Imagen del artículo con overlay */}
            <div className="relative h-56 overflow-hidden">
                <NewsImage 
                    src={src} 
                    alt={alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Contenido del artículo */}
            <div className="p-6">
                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400/80 transition-colors duration-200 line-clamp-2">
                    {titulo}
                </h3>
                
                {/* Extracto */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {extracto}
                </p>
                
                {/* Enlace "Leer artículo" con animación */}
                <div className="flex items-center justify-between">
                    <LinkNote 
                        href={link} 
                        className="inline-flex items-center text-orange-400/80 hover:text-orange-300 font-semibold text-sm transition-all duration-200 group/link"
                    >
                        Leer artículo
                        <svg 
                            className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </LinkNote>
                    
                    {/* Punto decorativo naranja más sutil */}
                    <div className="w-1 h-1 bg-orange-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>
            
            {/* Borde inferior que aparece en hover - más sutil */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </article>
    );
}