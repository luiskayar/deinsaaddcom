import { NewsFirebase } from "@/app/types";

export async function searchNewsByTitle(titulo: string, newsList: (NewsFirebase & { id: string })[]): Promise<(NewsFirebase & { id: string })[]> {
  return newsList
    .filter((doc) =>
      doc.title?.toLowerCase().includes(titulo.toLowerCase())
    );
}
