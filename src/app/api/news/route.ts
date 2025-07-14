import { z } from "zod";
import { NextResponse } from "next/server";
import { addNews } from "@/lib/addNews";

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