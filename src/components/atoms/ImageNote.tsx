import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
}

export default function NewsImage({src, alt}: Props) {
    return <img src={src} alt={alt} className='object-cover h-full w-full' width={640} height={480}/>
}