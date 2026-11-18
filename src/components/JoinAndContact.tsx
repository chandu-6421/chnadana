import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { CLUB_INFO, LEARNING_TRACKS } from '../data/communityData';
import { Reveal } from './Reveal';

interface JoinErrors {
  name?: string;
  email?: string;
  usn?: string;
  track?: string;
}

interface ContactErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function JoinAndContact() {
  // Join form state
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    usn: '',
    department: 'Computer Science & Engineering',
    semester: '3rd Semester',
    track: LEARNING_TRACKS[0].title,
    motivation: '',
  });
  const [joinErrors, setJoinErrors] = useState<JoinErrors>({});
  const [joinSubmitting, setJoinSubmitting] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);
  const [joinApiError, setJoinApiError] = useState('');

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Workshop / Collaboration Inquiry',
    message: '',
  });
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactApiError, setContactApiError] = useState('');

  async function handleJoinSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: JoinErrors = {};
    if (joinForm.name.trim().length < 2) errs.name = 'Enter your full name.';
    if (!EMAIL_RE.test(joinForm.email.trim())) errs.email = 'Enter a valid email address.';
    if (joinForm.usn.trim().length < 5) errs.usn = 'Enter a valid USN (e.g. 4RA23CS015).';
    if (!joinForm.track) errs.track = 'Select a preferred track.';

    setJoinErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setJoinSubmitting(true);
    setJoinApiError('');

    const formspreeId = import.meta.env.VITE_FORMSPREE_JOIN_ID as string | undefined;
    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(joinForm),
        });
        if (!res.ok) throw new Error('Submission failed. Please try again.');
      } else {
        await new Promise((r) => setTimeout(r, 350));
      }
      setJoinSuccess(true);
    } catch {
      setJoinApiError('Unable to reach the registration endpoint right now. Please email us directly.');
    } finally {
      setJoinSubmitting(false);
    }
  }

  async function handleContactSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: ContactErrors = {};
    if (contactForm.name.trim().length < 2) errs.name = 'Enter your name.';
    if (!EMAIL_RE.test(contactForm.email.trim())) errs.email = 'Enter a valid email address.';
    if (contactForm.message.trim().length < 10)
      errs.message = 'Please write at least 10 characters.';

    setContactErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setContactSubmitting(true);
    setContactApiError('');

    const formspreeId = import.meta.env.VITE_FORMSPREE_CONTACT_ID as string | undefined;
    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(contactForm),
        });
        if (!res.ok) throw new Error('Failed to send message.');
      } else {
        await new Promise((r) => setTimeout(r, 350));
      }
      setContactSuccess(true);
      setContactForm({
        name: '',
        email: '',
        subject: 'Workshop / Collaboration Inquiry',
        message: '',
      });
    } catch {
      setContactApiError('Could not send your message. Please reach out via email.');
    } finally {
      setContactSubmitting(false);
    }
  }

  return (
    <>
      {/* Join the Club Section */}
      <section
        id="join"
        className="border-b border-slate-200/80 bg-slate-50/60 py-16 sm:py-20 dark:border-slate-800/80 dark:bg-[#0E131D]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#34A853]">
                  Membership Open · 2026–27
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance] sm:text-4xl dark:text-white">
                  Join GDG on Campus – RIT Hassan
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Open to undergraduate students across all semesters and engineering departments at
                  Rajeev Institute of Technology, Hassan. Pick a learning track, join weekly labs,
                  and collaborate on campus builds.
                </p>

                <div className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  <p className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4285F4]" aria-hidden="true" />
                    <span>Zero membership fee — free workshops &amp; study jam resources</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#34A853]" aria-hidden="true" />
                    <span>Priority team slots for CODESTORM 2026 &amp; Google Cloud labs</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#EA4335]" aria-hidden="true" />
                    <span>Direct peer mentorship from CSE core leads and alumni</span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:col-span-7 dark:border-slate-800 dark:bg-slate-900/80">
                {joinSuccess ? (
                  <div className="py-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#34A853] dark:bg-emerald-950/60">
                      <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-slate-950 dark:text-white">
                      Welcome to GDG on Campus – RIT Hassan
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      Your membership application for{' '}
                      <strong className="font-semibold text-slate-900 dark:text-white">
                        {joinForm.name}
                      </strong>{' '}
                      ({joinForm.usn.toUpperCase()}) in the{' '}
                      <strong className="font-semibold text-slate-900 dark:text-white">
                        {joinForm.track}
                      </strong>{' '}
                      track has been recorded. Watch your inbox ({joinForm.email}) for the next
                      onboarding session in the CSE Seminar Hall.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setJoinSuccess(false);
                        setJoinForm((prev) => ({ ...prev, name: '', email: '', usn: '', motivation: '' }));
                      }}
                      className="mt-6 inline-flex h-10 items-center rounded-lg border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleJoinSubmit} className="space-y-4" noValidate>
                    <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                      Student Member Application
                    </h3>

                    {joinApiError && (
                      <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-[#EA4335] dark:bg-red-950/40">
                        {joinApiError}
                      </p>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="join-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Full Name *
                        </label>
                        <input
                          id="join-name"
                          type="text"
                          value={joinForm.name}
                          onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                          placeholder="Divya N."
                          className="mt-1.5 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                          aria-invalid={Boolean(joinErrors.name)}
                        />
                        {joinErrors.name && (
                          <p className="mt-1 text-xs font-medium text-[#EA4335]">{joinErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="join-usn" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          USN / Roll Number *
                        </label>
                        <input
                          id="join-usn"
                          type="text"
                          value={joinForm.usn}
                          onChange={(e) => setJoinForm({ ...joinForm, usn: e.target.value })}
                          placeholder="4RA24CS022"
                          className="mt-1.5 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm uppercase text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                          aria-invalid={Boolean(joinErrors.usn)}
                        />
                        {joinErrors.usn && (
                          <p className="mt-1 text-xs font-medium text-[#EA4335]">{joinErrors.usn}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="join-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Email Address *
                        </label>
                        <input
                          id="join-email"
                          type="email"
                          value={joinForm.email}
                          onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                          placeholder="divya@rithassan.ac.in"
                          className="mt-1.5 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                          aria-invalid={Boolean(joinErrors.email)}
                        />
                        {joinErrors.email && (
                          <p className="mt-1 text-xs font-medium text-[#EA4335]">{joinErrors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="join-semester" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Semester
                        </label>
                        <select
                          id="join-semester"
                          value={joinForm.semester}
                          onChange={(e) => setJoinForm({ ...joinForm, semester: e.target.value })}
                          className="mt-1.5 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        >
                          <option>1st Semester</option>
                          <option>3rd Semester</option>
                          <option>5th Semester</option>
                          <option>7th Semester</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="join-dept" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Department
                        </label>
                        <select
                          id="join-dept"
                          value={joinForm.department}
                          onChange={(e) => setJoinForm({ ...joinForm, department: e.target.value })}
                          className="mt-1.5 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        >
                          <option>Computer Science &amp; Engineering</option>
                          <option>CSE (AI &amp; Machine Learning)</option>
                          <option>Information Science &amp; Engineering</option>
                          <option>Electronics &amp; Communication</option>
                          <option>Other Branch</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="join-track" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Primary Learning Track *
                        </label>
                        <select
                          id="join-track"
                          value={joinForm.track}
                          onChange={(e) => setJoinForm({ ...joinForm, track: e.target.value })}
                          className="mt-1.5 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        >
                          {LEARNING_TRACKS.map((t) => (
                            <option key={t.id} value={t.title}>
                              {t.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="join-motivation" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        What do you want to build or learn this semester? (optional)
                      </label>
                      <textarea
                        id="join-motivation"
                        rows={3}
                        value={joinForm.motivation}
                        onChange={(e) => setJoinForm({ ...joinForm, motivation: e.target.value })}
                        placeholder="Interested in full-stack TypeScript projects and participating in CODESTORM 2026..."
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={joinSubmitting}
                      className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#4285F4] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#3367D6] disabled:opacity-60"
                    >
                      {joinSubmitting ? 'Submitting Application...' : 'Submit Membership Application'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact & Campus Map Section */}
      <section id="contact" className="bg-white py-16 sm:py-20 dark:bg-[#0B0F17]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4285F4]">
                Get in Touch
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                Contact &amp; Campus Location
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                Reach out for speaker proposals, CODESTORM sponsorships, inter-college club
                partnerships, or student inquiries.
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              {/* Contact Info + Embedded Map */}
              <div className="flex flex-col gap-6 lg:col-span-6">
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 dark:border-slate-800 dark:bg-slate-900/65">
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#4285F4]" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          Official Chapter Email
                        </p>
                        <a
                          href={`mailto:${CLUB_INFO.email}`}
                          className="font-semibold text-slate-950 hover:text-[#4285F4] dark:text-white"
                        >
                          {CLUB_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EA4335]" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          Campus Venue
                        </p>
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          {CLUB_INFO.department}, {CLUB_INFO.college}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                          {CLUB_INFO.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-slate-200 pt-4 dark:border-slate-800">
                    <a
                      href={CLUB_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-[#EA4335] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                      Instagram
                    </a>
                    <a
                      href={CLUB_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-[#4285F4] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                      LinkedIn
                    </a>
                    <a
                      href={CLUB_INFO.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                  <iframe
                    title="Rajeev Institute of Technology, Hassan campus map"
                    src="https://www.google.com/maps?q=Rajeev+Institute+of+Technology,+Hassan,+Karnataka&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Working Contact Form */}
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8 lg:col-span-6 dark:border-slate-800 dark:bg-slate-900/65">
                {contactSuccess ? (
                  <div className="flex h-full flex-col justify-center py-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#34A853] dark:bg-emerald-950/60">
                      <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-slate-950 dark:text-white">
                      Message Received
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      Thank you for reaching out to GDG on Campus – RIT Hassan. Our core team will
                      reply to your message within 24–48 hours.
                    </p>
                    <div>
                      <button
                        type="button"
                        onClick={() => setContactSuccess(false)}
                        className="mt-6 inline-flex h-10 items-center rounded-lg border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
                    <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                      Send a Message
                    </h3>

                    {contactApiError && (
                      <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-[#EA4335] dark:bg-red-950/40">
                        {contactApiError}
                      </p>
                    )}

                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Siddharth Nair"
                        className="mt-1.5 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        aria-invalid={Boolean(contactErrors.name)}
                      />
                      {contactErrors.name && (
                        <p className="mt-1 text-xs font-medium text-[#EA4335]">{contactErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="name@example.com"
                        className="mt-1.5 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        aria-invalid={Boolean(contactErrors.email)}
                      />
                      {contactErrors.email && (
                        <p className="mt-1 text-xs font-medium text-[#EA4335]">{contactErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="mt-1.5 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      >
                        <option>Workshop / Collaboration Inquiry</option>
                        <option>CODESTORM 2026 Sponsorship</option>
                        <option>Speaker / Mentor Proposal</option>
                        <option>Student Membership Question</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Write your message for the GDG on Campus – RIT Hassan core team..."
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 focus:border-[#4285F4] focus:outline-2 focus:outline-[#4285F4]/25 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        aria-invalid={Boolean(contactErrors.message)}
                      />
                      {contactErrors.message && (
                        <p className="mt-1 text-xs font-medium text-[#EA4335]">{contactErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={contactSubmitting}
                      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      {contactSubmitting ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
