import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { OfficialLogo } from './LogoAsset';
import { ThemeMode } from '../hooks/useTheme';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#0B0F17]/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4285F4]"
        >
          <OfficialLogo kind="gdg" heightClass="h-7" />
          <span className="font-display text-base font-bold tracking-tight text-slate-900 dark:text-white sm:text-lg">
            GDG on Campus · RIT Hassan
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4285F4] dark:text-slate-300 dark:hover:text-white whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#4285F4] after:transition-all after:duration-150 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors duration-150 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>

          <a
            href="#join"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-[#4285F4] px-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#3367D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] whitespace-nowrap shrink-0"
          >
            Join Us
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-[#0B0F17]"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800/70 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-[#4285F4] px-4 text-sm font-semibold text-white hover:bg-[#3367D6]"
            >
              Join the Community
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
