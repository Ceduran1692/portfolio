export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <div className="h-8 w-32 bg-zinc-800 rounded-lg animate-pulse mx-auto mb-4" />
        <div className="h-12 w-64 bg-zinc-800 rounded-lg animate-pulse mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-6 glass rounded-2xl animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-5 bg-zinc-700 rounded" />
              <div className="h-5 w-32 bg-zinc-700 rounded" />
            </div>
            <div className="h-4 w-full bg-zinc-800 rounded mb-2" />
            <div className="h-4 w-3/4 bg-zinc-800 rounded mb-4" />
            <div className="flex gap-4">
              <div className="h-4 w-16 bg-zinc-800 rounded" />
              <div className="h-4 w-12 bg-zinc-800 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}