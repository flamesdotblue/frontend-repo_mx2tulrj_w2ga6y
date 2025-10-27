import { Shield, Zap, Sparkles, Workflow } from 'lucide-react';

const features = [
  {
    title: 'Instant preview',
    description: 'See your changes live with a fast, reliable dev server and hot reloading.',
    icon: Zap,
  },
  {
    title: 'AI-assisted coding',
    description: 'Generate components, APIs, and database schemas with natural language.',
    icon: Sparkles,
  },
  {
    title: 'Secure by default',
    description: 'Best practices baked in so you can focus on building with confidence.',
    icon: Shield,
  },
  {
    title: 'Seamless workflow',
    description: 'From idea to deployment without leaving your browser.',
    icon: Workflow,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need</h2>
          <p className="mt-3 text-slate-600">A complete toolkit designed for speed, polish, and iteration.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600 leading-6">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
