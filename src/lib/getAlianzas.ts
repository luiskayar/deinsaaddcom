import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getAlianzas() {
  const snapshot = await getDocs(collection(db, "banderas"));

  const documentos = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return documentos;
}