import {collection, getDocs} from "firebase/firestore";
import { db } from "./firebase"

export async function getTitles(): Promise<string[]> {
  const snapshot = await getDocs(collection(db, "banderas"));

  const titles: string[] = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    if (data.title){
        titles.push(data.title);
    }
  });

  return titles;
}