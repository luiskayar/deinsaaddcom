import { NextResponse } from "next/server";
import { getNews } from "@/lib/functions/getNews";


export async function GET(request: Request) {
  try {
    
    const { searchParams } = new URL(request.url);

    const q = searchParams.get("q")?.toLowerCase(); 
    
    const news = await getNews();
    
    
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