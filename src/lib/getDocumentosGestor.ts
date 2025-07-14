import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export interface DocumentoGestor {
  id: string;
  titulo: string;
  archivoUrl: string;
  categoria?: string;
  fecha?: string | number | Date;
  slug?: string;
}

export async function getDocumentosGestor(): Promise<DocumentoGestor[]> {
  const q = query(collection(db, "documentosGestor"), orderBy("fecha", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      titulo: data.titulo,
      archivoUrl: data.archivoUrl,
      categoria: data.categoria,
      fecha: data.fecha,
      slug: data.slug,
    };
  });
} 