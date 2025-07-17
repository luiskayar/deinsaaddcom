import { NextResponse } from "next/server";
import { getNoticiaBySlug } from "@/lib/functions/getNoticiaBySlug";
import { News } from "@/app/types";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  try {
    const noticia = await getNoticiaBySlug(slug) as News;
    if (!noticia) {
      return NextResponse.json({ error: "Noticia no encontrada" }, { status: 404 });
    }
    return NextResponse.json(noticia, { status: 200 });
  } catch (error) {
    console.error("Error al obtener noticia por slug:", error);
    return NextResponse.json({ error: "Error al obtener noticia" }, { status: 500 });
  }
}
