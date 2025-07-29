import Link from "next/link";

export default function LinkNote({ href}: { href: string }) {
    
    return <Link href={href} className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Leer Articulo
            </Link>
}