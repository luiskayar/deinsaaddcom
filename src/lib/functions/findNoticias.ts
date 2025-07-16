import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { NewsFirebase } from "@/app/types";

export async function buscarNoticiasPorTitulo(titulo: string): Promise<(NewsFirebase & { id: string })[]> {
  const snapshot = await getDocs(collection(db, "news"));

  return snapshot.docs
    .map((doc) => {
      const data = doc.data() as NewsFirebase;
      return {
        id: doc.id,
        ...data,
      };
    })
    .filter((doc) =>
      doc.title?.toLowerCase().includes(titulo.toLowerCase())
    );
}
