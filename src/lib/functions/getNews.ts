import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { NewsFirebase } from "@/app/types";

export async function getNews() : Promise<(NewsFirebase & { id: string })[]> {
  const snapshot = await getDocs(collection(db, "news"));

  const documentos = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as NewsFirebase),
  }));

  return documentos;
}