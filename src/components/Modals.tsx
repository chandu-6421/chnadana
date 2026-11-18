import { FormEvent, useEffect, useState } from 'react';
import { Calendar, CheckCircle2, MapPin, X } from 'lucide-react';
import { CommunityEvent, GalleryItem } from '../data/communityData';
import { PhotoFrame } from './LogoAsset';

interface EventModalProps {
  event: CommunityEvent | null;
  onClose: () => void;
}

export function EventRegistrationModal({ event, onClose }: EventModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [usn, setUsn] = useState('');
  const [teamName, setTeamName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setSubmitted(false);
    setError('');
  }, [event?.id]);

  useEffect(() => {
    if (!event) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [event, onClose]);

  if (!event) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes('@') || !usn.trim()) {
      setError('Please enter your full name, valid email address, and RIT USN / Roll No.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4285F4]">
              {event.category} <span aria-hidden="true">·</span> {event.dateLabel}
            </p>
            <h2
              id="event-modal-title"
              className="mt-1 font-display text-2xl font-bold text-slate-950 dark:text-white"
            >
              {event.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close event dialog"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#4285F4]" aria-hidden="true" />
            {event.timeLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[#EA4335]" aria-hidden="true" />
            {event.venue}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {event.summary}
        </p>

        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
          {event.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#34A853]" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {event.status === 'upcoming' && (
          <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
            {submitted ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/50 dark:text-emerald-200">
                <p className="font-semibold">Seat reserved for {event.title}</p>
                <p className="mt-1 text-xs">
                  Confirmation details for {name} ({usn}) have been recorded. Bring your RIT student
                  ID card to {event.venue}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">
                  Quick Event Registration
                </h3>
                {error && (
                  <p role="alert" className="text-xs font-medium text-[#EA4335]">
                    {error}
                  </p>
                )}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="reg-name" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                      Full Name *
                    </label>
                    <input
                      id="reg-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Aarav Gowda"
                      className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="reg-usn" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                      USN / Roll Number *
                    </label>
                    <input
                      id="reg-usn"
                      type="text"
                      value={usn}
                      onChange={(e) => setUsn(e.target.value)}
                      placeholder="4RA23CS015"
                      className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm uppercase text-slate-900 focus:border-[#4285F4] focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="reg-email" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                      College or Personal Email *
                    </label>
                    <input
                      id="reg-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@rithassan.ac.in"
                      className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="reg-team" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                      Squad Name (optional)
                    </label>
                    <input
                      id="reg-team"
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="Team ByteBuilders"
                      className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#4285F4] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#3367D6]"
                >
                  Confirm Registration
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function GalleryLightboxModal({ item, onClose }: GalleryLightboxProps) {
  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <PhotoFrame
            src={item.image}
            alt={item.alt}
            fit="contain"
            aspectClass="aspect-[16/10] bg-slate-950"
            className="bg-slate-950 dark:bg-slate-950"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950/75 text-white hover:bg-slate-900"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="p-5">
          <p className="text-xs font-medium text-slate-400">
            {item.eventLabel} <span aria-hidden="true">·</span> {item.dateLabel}
          </p>
          <h3 id="gallery-modal-title" className="mt-1 font-display text-lg font-bold">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm text-slate-300">{item.caption}</p>
        </div>
      </div>
    </div>
  );
}
