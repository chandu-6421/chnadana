import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { CLUB_INFO } from '../data/communityData';
import { OfficialLogo } from './LogoAsset';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Learning Tracks', href: '#tracks' },
  { label: 'Projects', href: '#projects' },
  { label: 'Core Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Join Us', href: '#join' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-[#080B12]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand & All Three Institutional Logos */}
          <div className="md:col-span-6">
            <div className="flex flex-wrap items-center gap-5">
              <OfficialLogo kind="rit" heightClass="h-10" />
              <OfficialLogo kind="cse" heightClass="h-10" />
              <OfficialLogo kind="gdg" heightClass="h-8" />
            </div>

            <h2 className="mt-5 font-display text-lg font-bold text-slate-950 dark:text-white">
              {CLUB_INFO.name}
            </h2>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {CLUB_INFO.department}, {CLUB_INFO.college}. Building an open, collaborative developer
              community in Hassan, Karnataka.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={`mailto:${CLUB_INFO.email}`}
                aria-label="Email GDG on Campus RIT Hassan"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-[#4285F4] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CLUB_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GDG on Campus RIT Hassan Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-[#EA4335] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CLUB_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GDG on Campus RIT Hassan LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-[#4285F4] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CLUB_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GDG on Campus RIT Hassan GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Quick Links
            </p>
            <nav aria-label="Footer navigation" className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-6 sm:grid-cols-3">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center dark:border-slate-800 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} GDG on Campus – RIT Hassan. All rights reserved.
          </p>
          <p>
            Rajeev Institute of Technology · Dept. of Computer Science and Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
