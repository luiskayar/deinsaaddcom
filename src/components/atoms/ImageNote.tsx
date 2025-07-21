import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
}

export default function NewsImage({src, alt}: Props) {
<<<<<<< HEAD
    return <img src={src} alt={alt} className='object-cover h-full w-full' width={640} height={480}/>
}
=======
    return (<Image
            src={src}
            alt={alt}
            className='object-cover h-35 w-80'
            width={640}
            height={480}
        />);
}
>>>>>>> origin/noticias
