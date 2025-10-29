import React from 'react';
import { Calendar, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Calendar size={18} />
          </span>
          <span className="tracking-tight">EventHub</span>
        </a>
        <nav className="flex items-center gap-2">
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            <LogIn size={16} />
            Login
          </a>
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <UserPlus size={16} />
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
}
