import { query, where, collection, getDocs, limit } from "firebase/firestore";
import { db } from "../firebase";

export async function getNoticiaBySlug(slug: string) {
  try {
    const getSlug = query(
      collection(db, "news"), 
      where("slug", "==", slug),
      limit(1)
    );
    
    const querySnapshot = await getDocs(getSlug);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error('Error fetching noticia by slug:', error);
    return null;
  }
}
