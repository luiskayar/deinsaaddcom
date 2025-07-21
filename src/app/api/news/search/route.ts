import { z } from "zod";
import { NextResponse } from "next/server";
import { getNoticias } from "@/lib/functions/getNoticias";

const newsSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
});

//Function to found news

export async function GET(request: Request) {
  
  try {

    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.toLowerCase();

    console.log('la busqueda es: ', searchParams);
    
    const news = await getNoticias()

  } catch (error) {
    console.log('Errir al obtener noticias:', error);
    return NextResponse.json({error: 'Error al buscar noticias'}, { status: 500});
    
  }
}