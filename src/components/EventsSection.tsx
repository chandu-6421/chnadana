import { useMemo, useState } from 'react';
import { Calendar, MapPin, Search, Users } from 'lucide-react';
import {
  CommunityEvent,
  EVENTS,
  EventCategory,
  EventStatus,
} from '../data/communityData';
import { PhotoFrame } from './LogoAsset';
import { Reveal } from './Reveal';

interface EventsSectionProps {
  onSelectEvent: (event: CommunityEvent) => void;
}

const CATEGORIES: EventCategory[] = ['All', 'Hackathon', 'AI/ML', 'Web', 'Android', 'Cloud'];

const CATEGORY_TEXT_ACCENT: Record<Exclude<EventCategory, 'All'>, string> = {
  Hackathon: 'text-[#EA4335]',
  'AI/ML': 'text-[#4285F4]',
  Web: 'text-[#4285F4]',
  Android: 'text-[#34A853]',
  Cloud: 'text-[#D97706] dark:text-[#FBBC04]',
};

export function EventsSection({ onSelectEvent }: EventsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [statusFilter, setStatusFilter] = useState<'all' | EventStatus>('all');

  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return EVENTS.filter((event) => {
      const matchesCategory =
        selectedCategory === 'All' || event.category === selectedCategory;
      const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
      const matchesQuery =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.summary.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query);
      return matchesCategory && matchesStatus && matchesQuery;
    });
  }, [searchQuery, selectedCategory, statusFilter]);

  return (
    <section
      id="events"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20 dark:border-slate-800/80 dark:bg-[#0B0F17]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#EA4335]">
                Events &amp; Hackathons
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance] sm:text-4xl dark:text-white">
                Upcoming sprints &amp; past sessions
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate-600 dark:text-slate-300">
                From flagship 24-hour hackathons like CODESTORM 2026 to focused weekend study jams
                in the RIT CSE labs.
              </p>
            </div>

            {/* Upcoming / Past segmented switch */}
            <div
              role="group"
              aria-label="Filter events by status"
              className="inline-flex w-fit items-center gap-1 rounded-lg border border-slate-200 bg-slate-100/90 p-1 dark:border-slate-800 dark:bg-slate-900"
            >
              {(
                [
                  { id: 'all', label: 'All Events' },
                  { id: 'upcoming', label: 'Upcoming' },
                  { id: 'past', label: 'Past' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id)}
                  className={`h-8 rounded-md px-3 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] ${
                    statusFilter === tab.id
                      ? 'bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <label htmlFor="event-search" className="sr-only">
                Search events by title, topic, or venue
              </label>
              <input
                id="event-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search CODESTORM, Cloud, Gemini..."
                className="h-10 w-full rounded-lg border border-slate-300 bg-white pr-4 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>

            <div
              role="group"
              aria-label="Filter events by category"
              className="flex flex-wrap items-center gap-1.5"
            >
              {CATEGORIES.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`h-9 rounded-lg border px-3.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] ${
                      active
                        ? 'border-[#4285F4] bg-[#4285F4] text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Event Cards Grid */}
        {filteredEvents.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center dark:border-slate-800 dark:bg-slate-900/60">
            <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              No matching events found
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Try clearing your search filter or switching back to all event categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setStatusFilter('all');
              }}
              className="mt-4 inline-flex h-9 items-center rounded-lg border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event, idx) => (
              <Reveal key={event.id} delay={Math.min(idx * 0.05, 0.2)}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900/75 ${
                    event.featured
                      ? 'border-[#4285F4]/50 dark:border-[#4285F4]/50 md:col-span-2 lg:col-span-2'
                      : 'border-slate-200/90 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700'
                  }`}
                >
                  <div
                    className={
                      event.featured
                        ? 'grid h-full lg:grid-cols-12'
                        : 'flex h-full flex-col'
                    }
                  >
                    <div
                      className={
                        event.featured
                          ? 'lg:col-span-6 overflow-hidden bg-slate-950'
                          : 'overflow-hidden'
                      }
                    >
                      <PhotoFrame
                        src={event.image}
                        alt={event.imageAlt}
                        fit={event.featured ? 'contain' : 'cover'}
                        aspectClass={
                          event.featured
                            ? 'aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]'
                            : 'aspect-[16/10]'
                        }
                        className={
                          event.featured
                            ? 'bg-slate-950 dark:bg-slate-950'
                            : 'group-hover:[&_img]:scale-[1.03]'
                        }
                      />
                    </div>

                    <div
                      className={`flex flex-1 flex-col justify-between p-6 ${
                        event.featured ? 'lg:col-span-6' : ''
                      }`}
                    >
                      <div>
                        {/* Clean unboxed metadata (Zero-Pill Discipline) */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                          <span className={`font-semibold ${CATEGORY_TEXT_ACCENT[event.category]}`}>
                            {event.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{event.status === 'upcoming' ? 'Upcoming' : 'Completed'}</span>
                          <span aria-hidden="true">·</span>
                          <span>{event.dateLabel}</span>
                        </div>

                        <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                          {event.title}
                        </h3>

                        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {event.summary}
                        </p>

                        <dl className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5 shrink-0 text-[#4285F4]" aria-hidden="true" />
                            <dd>{event.timeLabel}</dd>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#EA4335]" aria-hidden="true" />
                            <dd>{event.venue}</dd>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-3.5 w-3.5 shrink-0 text-[#34A853]" aria-hidden="true" />
                            <dd>{event.seats}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                        <button
                          type="button"
                          onClick={() => onSelectEvent(event)}
                          className={`inline-flex h-9 items-center justify-center rounded-lg px-4 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] ${
                            event.status === 'upcoming'
                              ? 'bg-[#4285F4] text-white hover:bg-[#3367D6]'
                              : 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
                          }`}
                        >
                          {event.status === 'upcoming' ? 'Register Now' : 'View Event Notes'}
                        </button>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {event.highlights.length} highlights
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
