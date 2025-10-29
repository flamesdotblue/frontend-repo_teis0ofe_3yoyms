import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-pink-100 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              <Sparkles size={14} /> New: QR-based check-in
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Discover events. Register fast. Check in with a tap.
            </h1>
            <p className="mt-4 text-slate-600">
              EventHub is a simple way to explore upcoming events, save your spot, and breeze
              through the door with secure QR codes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#events"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Browse events
              </a>
              <a
                href="#create"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Create event
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="h-full w-full grid place-items-center p-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-indigo-600/10 text-indigo-600 grid place-items-center">
                    <Sparkles size={28} />
                  </div>
                  <p className="text-lg font-medium">Clean, minimal MVP UI</p>
                  <p className="text-slate-600 text-sm">Built with React + Tailwind in this sandbox.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
