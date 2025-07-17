import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function getSlugNews(slug: string): Promise<{ title: string; image: string;description:string} | null> {

    const newsRef = collection(db, "noticias");
    const q = query(newsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return null;
    }

    const newsData = querySnapshot.docs[0].data();
    return {
        title: newsData.title,
        image: newsData.image,
        description: newsData.description
    };





}