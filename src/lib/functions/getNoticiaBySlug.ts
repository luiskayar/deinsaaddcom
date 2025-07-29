import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getNoticiaBySlug(slug: string) {
  const getSlug = query(collection(db, "news"), where("slug", "==", slug));
  const querySnapshot = await getDocs(getSlug);

  if (querySnapshot.empty) {
    return null;
  }

  const doc = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() };
}
