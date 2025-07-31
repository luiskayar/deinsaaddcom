import Link from "next/link";

type LinkNoteProps = {
    href: string;
    children?: React.ReactNode;
    className?: string;
};

export default function LinkNote({ href, children, className }: LinkNoteProps) {
    return (
        <Link 
            href={href} 
            className={className || "inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition-colors"}
        >
            {children || "Leer Articulo"}
        </Link>
    );
}