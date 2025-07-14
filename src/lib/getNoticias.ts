import { collection, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import { db } from "./firebase";

export async function getNoticias() {
  const q = query(collection(db, "documentosGestor"), orderBy("fecha", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      titulo: data.titulo,
      resumen: data.resumen || (data.titulo ? data.titulo.substring(0, 120) : ""),
      imagenUrl: data.archivoUrl,
      fecha: data.fecha,
      slug: data.slug,
    };
  });
}

export async function getNoticiaBySlug(slug: string) {
  const q = query(collection(db, "documentosGestor"), where("slug", "==", slug), limit(1));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const data = snapshot.docs[0].data();
  return {
    id: snapshot.docs[0].id,
    titulo: data.titulo,
    resumen: data.resumen || (data.titulo ? data.titulo.substring(0, 120) : ""),
    imagenUrl: data.archivoUrl,
    fecha: data.fecha,
    slug: data.slug,
  };
} 