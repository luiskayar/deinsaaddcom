// app/noticiasTest/page.tsx
import SearchNewsButton from "@/components/atoms/SearchNewsButton";

export default function NoticiasTestPage() {
  return (
    <main className="bg-gray-50 ">
      <div className="max-w-4xl mx-auto py-10 px-4 space-y-6">
        <h1 className="text-3xl font-bold text-center text-black">Noticias</h1>
        <SearchNewsButton />
      </div>
    </main>
  );
}
