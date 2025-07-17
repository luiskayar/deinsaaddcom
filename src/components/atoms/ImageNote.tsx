import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
}

export default function NewsImage({src, alt}: Props) {
    return (<Image
            src={src}
            alt={alt}
            className='object-cover h-35 w-80'
            width={640}
            height={480}
        />);
}
