import { NextResponse } from "next/server";
import { getAlianzas} from "@/lib/getAlianzas";

export async function GET() {
 try {
    const documentos = await getAlianzas();
    return NextResponse.json({ documentos });
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    return NextResponse.json({ error: "Error al obtener documentos" }, { status: 500 });
  }
}
