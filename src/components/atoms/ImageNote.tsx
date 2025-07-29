import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
    className?: string;
}

export default function NewsImage({src, alt, className = 'object-cover h-35 w-80'}: Props) {
    return (<Image
            src={src}
            alt={alt}
            className={className}
            width={640}
            height={480}
        />);
}
