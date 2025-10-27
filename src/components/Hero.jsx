export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-gradient-to-tr from-indigo-400/30 via-sky-300/30 to-purple-300/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20 sm:py-28 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            Lightning-fast dev environment
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Build, run, and ship ideas in minutes
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-600">
            Spin up full-stack apps with AI assistance. Edit code, preview changes live, and deploy with confidence — all in one flow.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800">
              Start building
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              See features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
