import LinkNote from '../atoms/LinkNote';
import Heading from '../atoms/Heading';
import NewsImage from '../atoms/ImageNote';
import Paragraph from '../atoms/Paragraph';

type Props = {
    titulo: string;
    extracto: string;
    link: string;
    alt: string;
    src: string;
    key: string;
};

export default function ArticlePreview({titulo, extracto, link, alt, src, key}: Props) {          //intentar sacar el key

    return <article key={key} className='bg-white rounded-xl shadow-md overflow-hidden flex flex-col'>
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <NewsImage src={src} alt={alt}/>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <Heading>{titulo}</Heading>
                    
                    
                    <Paragraph>{extracto}</Paragraph>
                    <LinkNote href={link}/>
                </div>
           </article>
}