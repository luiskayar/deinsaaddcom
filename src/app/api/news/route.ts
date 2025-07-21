import { z } from "zod";
import { NextResponse } from "next/server";
import { addNews } from "@/lib/addNews";
import { getNoticias } from "@/lib/functions/getNoticias";

// Define the validation schema for the news data
const newsSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
});

//Function to add a news
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parseResult = newsSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: parseResult.error.issues },
        { status: 400 }
      );
    }
    const docRef = await addNews(parseResult.data);
    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error("Error al agregar noticia:", error);
    return NextResponse.json({ error: "Error al agregar noticia" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    
    const { searchParams } = new URL(request.url);

    const q = searchParams.get("q")?.toLowerCase(); 
    
    const news = await getNoticias();
    
    
    if (!q || q.trim() === "") {
      console.log('esta vacio');
      
      return NextResponse.json(news, { status: 200 });
    } else {
      console.log(q);
      
       const filtered =  q ? news.filter((doc) =>
        doc.title.toLowerCase().includes(q)
      ) : news;

      console.log(filtered);
      
      return NextResponse.json(filtered, { status: 200});
    }

  } catch (error) {
    console.error("Error al obtener noticias:", error);
    return NextResponse.json({ error: "Error al obtener noticias" }, { status: 500 });
  }
} 