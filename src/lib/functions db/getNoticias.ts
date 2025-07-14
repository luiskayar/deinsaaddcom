import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getNoticias() {
  const snapshot = await getDocs(collection(db, "news"));

  const documentos = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return documentos;
}