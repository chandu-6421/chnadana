import { useEffect, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { CLUB_INFO, COMMUNITY_STATS, TEAM_MEMBERS } from '../data/communityData';
import { OfficialLogo, PhotoFrame, PortraitFrame } from './LogoAsset';
import { useCountUp } from '../hooks/useCountUp';

interface HeroProps {
  onRegisterCodestorm: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeRemaining(targetIso: string): TimeLeft {
  const diff = Math.max(0, new Date(targetIso).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function StatCounterCard({
  label,
  value,
  suffix,
  unit,
  accentHex,
}: {
  label: string;
  value: number;
  suffix: string;
  unit: string;
  accentHex: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-slate-200/90 bg-white/80 p-5 backdrop-blur-sm transition-colors duration-150 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700"
    >
      <div className="flex items-baseline gap-1">
        <span
          className="font-display text-3xl font-bold tracking-tight tabular-nums sm:text-4xl"
          style={{ color: accentHex }}
        >
          {count}
          {suffix}
        </span>
      </div>
      <p className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</p>
      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{unit}</p>
    </div>
  );
}

const STAT_ACCENTS = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];

export function Hero({ onRegisterCodestorm }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeRemaining(CLUB_INFO.nextEventIso)
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining(CLUB_INFO.nextEventIso));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200/80 bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 dark:border-slate-800/80 dark:bg-[#0B0F17]"
    >
      {/* Subtle animated dot-grid + developer bracket backdrop */}
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-75" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#4285F4]/10 blur-3xl dark:bg-[#4285F4]/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-[#34A853]/10 blur-3xl dark:bg-[#34A853]/10"
        aria-hidden="true"
      />

      {/* Floating code bracket accents */}
      <div
        className="pointer-events-none absolute top-14 right-8 hidden select-none font-mono text-5xl font-bold text-[#4285F4]/15 lg:block animate-float-slow dark:text-[#4285F4]/20"
        aria-hidden="true"
      >
        &lt;/&gt;
      </div>
      <div
        className="pointer-events-none absolute bottom-32 left-6 hidden select-none font-mono text-4xl font-bold text-[#EA4335]/15 lg:block animate-float-slow dark:text-[#EA4335]/20"
        aria-hidden="true"
      >
        {'{ }'}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Institutional Partners & Official Logos Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-3 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/65">
          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            <div className="flex items-center gap-2.5">
              <OfficialLogo kind="rit" heightClass="h-9" />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                  Rajeev Institute of Technology
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Hassan, Karnataka</p>
              </div>
            </div>

            <span className="hidden h-6 w-px bg-slate-200 sm:block dark:bg-slate-700" aria-hidden="true" />

            <div className="flex items-center gap-2.5">
              <OfficialLogo kind="cse" heightClass="h-9" />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                  Dept. of Computer Science &amp; Engg.
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Host Department</p>
              </div>
            </div>

            <span className="hidden h-6 w-px bg-slate-200 sm:block dark:bg-slate-700" aria-hidden="true" />

            <div className="flex items-center gap-2.5">
              <OfficialLogo kind="gdg" heightClass="h-7" />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                  GDG on Campus
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">RIT Hassan Chapter</p>
              </div>
            </div>
          </div>

          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Official Student Chapter · Est. Hassan
          </p>
        </div>

        {/* Main 2-Column Hero Split */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Google Developer Groups <span aria-hidden="true">·</span> Rajeev Institute of Technology, Hassan
            </p>

            <h1 className="mt-3 max-w-2xl font-display text-[clamp(2.25rem,4vw,3.65rem)] font-bold leading-[1.1] tracking-tight text-slate-950 [text-wrap:balance] dark:text-white">
              Build real software together at{' '}
              <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
                GDG on Campus – RIT Hassan
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              A peer-driven engineering community hosted by the Department of Computer Science and
              Engineering. We run hands-on technical workshops, study jams, open-source sprints, and
              CODESTORM 2026 to bridge campus coursework with production engineering.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#join"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4285F4] px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#3367D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] whitespace-nowrap shrink-0"
              >
                Join Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#events"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 whitespace-nowrap shrink-0"
              >
                <Calendar className="h-4 w-4 text-[#4285F4]" aria-hidden="true" />
                View Events
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2.5">
                {TEAM_MEMBERS.slice(0, 5).map((member) => (
                  <PortraitFrame
                    key={member.id}
                    src={member.photo}
                    alt={`${member.name} — ${member.role}`}
                    initials={member.initials}
                    accentHex={member.accentHex}
                    aspectClass="aspect-square"
                    className="h-9 w-9 rounded-full border-2 border-white dark:border-[#0B0F17]"
                  />
                ))}
              </div>
              <a
                href="#team"
                className="text-xs font-medium text-slate-600 transition-colors hover:text-[#4285F4] dark:text-slate-300 dark:hover:text-[#4285F4]"
              >
                Guided by <strong className="font-semibold text-slate-900 dark:text-white">Dr. Mahesh P K</strong>, <strong className="font-semibold text-slate-900 dark:text-white">Dr. Suresha D</strong> &amp; coordinators <strong className="font-semibold text-slate-900 dark:text-white">Prof. Dinesh S</strong>, <strong className="font-semibold text-slate-900 dark:text-white">Prof. Shashikala M K</strong> &amp; <strong className="font-semibold text-slate-900 dark:text-white">Yashawantha H M</strong> →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <PhotoFrame
                src="/src/assets/images/hero_dev_community_1794980369732.jpg"
                alt="RIT Hassan computer science students collaborating with laptops at a GDG developer meetup"
                aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Next Event Live Countdown Strip */}
        <div className="mt-10 flex flex-col justify-between gap-5 rounded-2xl border border-slate-200/90 bg-slate-50/90 p-5 sm:flex-row sm:items-center sm:px-6 dark:border-slate-800 dark:bg-slate-900/75">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#EA4335]">
              CODESTORM 2026 · November 18, 2026 · 9:00 AM – 5:00 PM IST
            </p>
            <h2 className="mt-1 font-display text-lg font-bold text-slate-950 sm:text-xl dark:text-white">
              {CLUB_INFO.nextEventName} — Challenge 01: Club Website Building Challenge
            </h2>
            <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
              Dept. of CSE, RIT Hassan · Free Registration · Individual / Team · Beginner to Advanced
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5 font-mono" aria-label="Countdown to CODESTORM 2026">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hrs', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="flex min-w-[54px] flex-col items-center rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 dark:border-slate-700 dark:bg-slate-800/90"
                >
                  <span className="text-lg font-bold tabular-nums text-slate-950 dark:text-white">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onRegisterCodestorm}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 px-4 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 whitespace-nowrap shrink-0"
            >
              Register Squad
            </button>
          </div>
        </div>

        {/* 4-Column Animated Community Stats Strip */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {COMMUNITY_STATS.map((stat, idx) => (
            <StatCounterCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              unit={stat.unit}
              accentHex={STAT_ACCENTS[idx % STAT_ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
