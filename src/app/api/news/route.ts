import { NextResponse } from "next/server";
import { getNews } from "@/lib/functions/getNews";


export async function GET() {
  try {
    const news = await getNews();
    return NextResponse.json(news, { status: 200 });
  } catch (error) {
    console.error("Error al obtener noticias:", error);
    return NextResponse.json({ error: "Error al obtener noticias" }, { status: 500 });
  }
}