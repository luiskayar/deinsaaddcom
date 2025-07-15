import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { NewsFirebase } from "@/app/types";

export async function buscarNoticiasPorTitulo(title: string): Promise<(NewsFirebase & { id: string })[]> {
  const noticiasRef = collection(db, "news");

  const q = query(noticiasRef, where("title", "==", title));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as (NewsFirebase & { id: string })[];
}
