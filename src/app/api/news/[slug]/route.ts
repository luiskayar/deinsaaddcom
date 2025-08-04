import { NextResponse, NextRequest } from "next/server";
import { getNoticiaBySlug } from "@/lib/functions/getNoticiaBySlug";
import { News } from "@/app/types";



export async function GET(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").pop();
  const decodedSlug = decodeURIComponent(slug ?? "");

  if (!slug) {
    return NextResponse.json({ error: "Slug no proporcionado" }, { status: 400 });
  }

  try {
    const noticia = await getNoticiaBySlug(decodedSlug) as News;
    if (!noticia) {
      return NextResponse.json({ error: "Noticia no encontrada" }, { status: 404 });
    }

    // Caché más agresivo para mejor rendimiento
    const response = NextResponse.json(noticia, { status: 200 });
    response.headers.set('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600');
    response.headers.set('ETag', `"${noticia.id}-${Date.now()}"`);
    
    return response;
  } catch (error) {
    console.error("Error al obtener noticia por slug:", error);
    return NextResponse.json({ error: "Error al obtener noticia" }, { status: 500 });
  }
}
