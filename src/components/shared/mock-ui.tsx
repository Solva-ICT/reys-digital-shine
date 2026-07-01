export function MockUI() {
  return (
    <div className="absolute inset-x-6 bottom-6 top-10 rounded-2xl bg-white/15 p-3 backdrop-blur-md">
      <div className="flex gap-1.5">
        <div className="h-2 w-2 rounded-full bg-white/60" />
        <div className="h-2 w-2 rounded-full bg-white/40" />
        <div className="h-2 w-2 rounded-full bg-white/30" />
      </div>
      <div className="mt-3 h-2 w-3/4 rounded bg-white/40" />
      <div className="mt-2 h-2 w-1/2 rounded bg-white/30" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="h-10 rounded-lg bg-white/30" />
        <div className="h-10 rounded-lg bg-white/40" />
        <div className="h-10 rounded-lg bg-white/30" />
      </div>
      <div className="mt-3 h-14 rounded-lg bg-white/25" />
    </div>
  );
}
