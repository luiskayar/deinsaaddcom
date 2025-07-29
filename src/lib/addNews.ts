import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { NewsFirebase } from "@/app/types";

export async function addNews(news: NewsFirebase) {
    const docRef = await addDoc(collection(db, "news"), news);
    return docRef;
}