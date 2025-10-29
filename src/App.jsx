import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import EventsGrid from './components/EventsGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section className="py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Upcoming Events</h2>
                <p className="text-slate-600">Discover and register for experiences near you.</p>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                View all
              </a>
            </div>
            <EventsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
