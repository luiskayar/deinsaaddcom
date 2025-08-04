export default function Loading() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section Skeleton */}
        <div className="mb-12">
          <div className="flex items-center text-sm text-gray-400 gap-4 mb-6">
            <div className="w-24 h-8 bg-gray-800 rounded-xl animate-pulse"></div>
          </div>
          <div className="w-3/4 h-12 bg-gray-800 rounded-lg animate-pulse mb-6"></div>
        </div>

        {/* Featured Image Skeleton */}
        <div className="mb-12">
          <div className="relative w-full h-96 bg-gray-800 rounded-2xl animate-pulse"></div>
          <div className="w-1/2 h-4 bg-gray-800 rounded mt-4 mx-auto animate-pulse"></div>
        </div>

        {/* Content Section Skeleton */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <div className="w-full h-6 bg-gray-800 rounded animate-pulse mb-4"></div>
            <div className="w-5/6 h-6 bg-gray-800 rounded animate-pulse mb-4"></div>
            <div className="w-4/5 h-6 bg-gray-800 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Share Section Skeleton */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div className="w-48 h-4 bg-gray-800 rounded animate-pulse"></div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-4 bg-gray-800 rounded animate-pulse"></div>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-gray-800 rounded-lg animate-pulse"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg animate-pulse"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 