import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} EventHub. Built in this sandbox with React + Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:text-slate-900" href="#privacy">Privacy</a>
          <a className="hover:text-slate-900" href="#terms">Terms</a>
          <a className="hover:text-slate-900" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
