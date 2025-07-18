import NewsSearch from "@/components/organisms/NewsSearch";
import { getNews } from "@/lib/functions/getNews";

export default async function NoticiasTestPage() {
  const allNews = await getNews().catch(() => null);

  if (!allNews || allNews.length === 0) {
    return (
      <p className="text-center text-red-500">
        Ocurrió un error al cargar las noticias.
      </p>
    );
  }

 return (
    <main className="bg-gray-50">
      <div className="max-w-4xl mx-auto py-10 px-4 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">Noticias</h1>
        <NewsSearch allNews={allNews} />
      </div>
    </main>
  );
}