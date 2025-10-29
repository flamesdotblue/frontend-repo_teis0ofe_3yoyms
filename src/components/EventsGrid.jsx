import React from 'react';
import { CalendarDays, MapPin, Users } from 'lucide-react';

const SAMPLE_EVENTS = [
  {
    id: '1',
    title: 'Tech Talks Thursday',
    description: 'Lightning talks on web, AI, and product.',
    date: '2025-11-05T18:00:00Z',
    capacity: 120,
    location: 'Downtown Hub, Hall A',
  },
  {
    id: '2',
    title: 'Design for Developers',
    description: 'Practical design systems for engineers.',
    date: '2025-11-12T17:00:00Z',
    capacity: 80,
    location: 'Riverside Studio',
  },
  {
    id: '3',
    title: 'Startup Breakfast',
    description: 'Founders meet-up with coffee and croissants.',
    date: '2025-11-20T08:30:00Z',
    capacity: 60,
    location: 'Cafe Aurora',
  },
];

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

function EventCard({ event }) {
  return (
    <article className="group rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-indigo-700">
          {event.title}
        </h3>
        <p className="mt-1 text-slate-600 text-sm">{event.description}</p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
          <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {formatDate(event.date)}</span>
          <span className="inline-flex items-center gap-2"><MapPin size={16} /> {event.location}</span>
          <span className="inline-flex items-center gap-2"><Users size={16} /> {event.capacity} spots</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <a
            className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            href={`#/events/${event.id}`}
            aria-label={`View details for ${event.title}`}
          >
            View details
          </a>
          <button
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
            onClick={() => alert('Registration flow will appear here in the full MVP.')}
          >
            Register
          </button>
        </div>
      </div>
    </article>
  );
}

export default function EventsGrid() {
  return (
    <div id="events" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SAMPLE_EVENTS.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
}
