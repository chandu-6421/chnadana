import { useMemo, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Maximize2,
  Quote,
} from 'lucide-react';
import {
  GALLERY_ITEMS,
  GalleryItem,
  TEAM_MEMBERS,
  TeamMember,
} from '../data/communityData';
import { PhotoFrame, PortraitFrame } from './LogoAsset';
import { Reveal } from './Reveal';

interface TeamAndGalleryProps {
  onSelectGalleryItem: (item: GalleryItem) => void;
}

type TeamFilter = 'All' | TeamMember['group'];
const TEAM_FILTERS: TeamFilter[] = ['All', 'Leadership & Faculty', 'Student Coordinator'];

export function TeamAndGallery({ onSelectGalleryItem }: TeamAndGalleryProps) {
  const [teamFilter, setTeamFilter] = useState<TeamFilter>('All');
  const [selectedId, setSelectedId] = useState<string>(TEAM_MEMBERS[0].id);

  const leadershipMembers = useMemo(
    () => TEAM_MEMBERS.filter((m) => m.group === 'Leadership & Faculty'),
    []
  );

  const visibleMembers = useMemo(() => {
    if (teamFilter === 'All') return TEAM_MEMBERS;
    return TEAM_MEMBERS.filter((member) => member.group === teamFilter);
  }, [teamFilter]);

  const activeMember = useMemo(() => {
    return (
      visibleMembers.find((m) => m.id === selectedId) ??
      visibleMembers[0] ??
      TEAM_MEMBERS[0]
    );
  }, [visibleMembers, selectedId]);

  const activeIndex = visibleMembers.findIndex((m) => m.id === activeMember.id);

  const handleFilterChange = (group: TeamFilter) => {
    setTeamFilter(group);
    const nextList =
      group === 'All' ? TEAM_MEMBERS : TEAM_MEMBERS.filter((m) => m.group === group);
    if (nextList.length > 0 && !nextList.some((m) => m.id === selectedId)) {
      setSelectedId(nextList[0].id);
    }
  };

  const handleStep = (direction: -1 | 1) => {
    if (visibleMembers.length === 0) return;
    const nextIdx =
      (activeIndex + direction + visibleMembers.length) % visibleMembers.length;
    setSelectedId(visibleMembers[nextIdx].id);
  };

  const accentColor =
    activeMember.accentHex === '#FBBC04' ? '#D97706' : activeMember.accentHex;

  return (
    <section
      id="team"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20 dark:border-slate-800/80 dark:bg-[#0B0F17]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Institutional Patrons: Principal, HOD & CSE Professors */}
        <Reveal>
          <div className="mb-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#34A853]">
                College Leadership &amp; Faculty Coordinators
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance] sm:text-4xl dark:text-white">
                Principal, HOD &amp; Faculty Coordinators
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                Guided by Principal Dr. Mahesh P K, CSE HOD Dr. Suresha D, Club Coordinator
                Prof. Dinesh S, and Event Coordinator Prof. Shashikala M K.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {leadershipMembers.map((patron) => {
                const isSelected = patron.id === activeMember.id;
                return (
                  <button
                    key={patron.id}
                    type="button"
                    onClick={() => {
                      setTeamFilter('All');
                      setSelectedId(patron.id);
                    }}
                    className={`group flex flex-col overflow-hidden rounded-2xl border text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] ${
                      isSelected
                        ? 'border-[#4285F4] bg-white shadow-sm ring-1 ring-[#4285F4]/30 dark:border-[#4285F4] dark:bg-slate-900'
                        : 'border-slate-200/90 bg-slate-50/60 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/65 dark:hover:border-slate-700 dark:hover:bg-slate-900'
                    }`}
                  >
                    <div className="w-full overflow-hidden">
                      <PhotoFrame
                        src={patron.photo}
                        alt={`${patron.name} — ${patron.role}`}
                        fit="contain"
                        aspectClass="aspect-[4/3]"
                        className={
                          patron.photoPosition === 'top'
                            ? 'bg-[#123368] dark:bg-[#123368]'
                            : 'bg-slate-100 dark:bg-slate-950'
                        }
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4">
                      <div>
                        <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {patron.yearOrTitle}
                        </p>
                        <h3 className="mt-0.5 font-display text-base font-bold text-slate-950 dark:text-white">
                          {patron.name}
                        </h3>
                        <p
                          className="mt-0.5 text-xs font-semibold"
                          style={{
                            color: patron.accentHex === '#FBBC04' ? '#D97706' : patron.accentHex,
                          }}
                        >
                          {patron.role}
                        </p>
                      </div>
                      <p className="mt-2.5 text-xs text-slate-500 dark:text-slate-400">
                        {patron.department}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Interactive Coordinator & Team Spotlight */}
        <Reveal delay={0.05}>
          <div className="border-t border-slate-200/80 pt-14 dark:border-slate-800">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4285F4]">
                  Official Chapter Coordinators
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance] sm:text-4xl dark:text-white">
                  Coordinator Spotlight &amp; Roster
                </h2>
                <p className="mt-2 max-w-xl text-base text-slate-600 dark:text-slate-300">
                  Select Principal Dr. Mahesh P K, HOD Dr. Suresha D, Prof. Dinesh S, Prof.
                  Shashikala M K, or Student Coordinator Yashawantha H M to inspect their role and
                  message.
                </p>
              </div>

              <div
                role="group"
                aria-label="Filter coordinators and team members"
                className="flex flex-wrap items-center gap-1.5"
              >
                {TEAM_FILTERS.map((group) => (
                  <button
                    key={group}
                    type="button"
                    onClick={() => handleFilterChange(group)}
                    className={`h-9 rounded-lg border px-3.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] ${
                      teamFilter === group
                        ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-950'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>

            {/* Spotlight Stage */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/75">
              <div className="grid items-stretch lg:grid-cols-12">
                <div className="flex items-center justify-center bg-slate-100 p-4 dark:bg-slate-950/60 lg:col-span-5">
                  <PortraitFrame
                    src={activeMember.photo}
                    alt={`${activeMember.name}, ${activeMember.role} at GDG on Campus RIT Hassan`}
                    initials={activeMember.initials}
                    accentHex={activeMember.accentHex}
                    fit="contain"
                    aspectClass="aspect-[4/3] w-full rounded-xl"
                    className={
                      activeMember.photoPosition === 'top'
                        ? 'bg-[#123368] dark:bg-[#123368]'
                        : 'bg-slate-100 dark:bg-slate-950'
                    }
                  />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
                  <div>
                    <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-4 dark:border-slate-800">
                      <div>
                        <span
                          className="font-mono text-xs font-semibold tabular-nums"
                          style={{ color: accentColor }}
                        >
                          {String(activeIndex + 1).padStart(2, '0')} /{' '}
                          {String(visibleMembers.length).padStart(2, '0')} · {activeMember.group}
                        </span>
                        <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                          {activeMember.name}
                        </h3>
                        <p className="text-sm font-semibold text-[#4285F4]">
                          {activeMember.role} <span className="text-slate-400">·</span>{' '}
                          <span className="font-medium text-slate-600 dark:text-slate-300">
                            {activeMember.department}
                          </span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleStep(-1)}
                          aria-label="Previous coordinator"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                        >
                          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStep(1)}
                          aria-label="Next coordinator"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                        >
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <blockquote className="mt-6">
                      <Quote
                        className="h-5 w-5 text-slate-300 dark:text-slate-600"
                        aria-hidden="true"
                      />
                      <p className="mt-2 font-display text-lg leading-snug font-medium text-slate-900 sm:text-xl dark:text-slate-100">
                        “{activeMember.quote}”
                      </p>
                    </blockquote>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {activeMember.bio}
                    </p>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Focus Areas
                      </p>
                      <p className="mt-1.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                        {activeMember.focusAreas.join(' · ')}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-5 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      {activeMember.github && (
                        <a
                          href={activeMember.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-800 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                        >
                          <Github className="h-3.5 w-3.5" aria-hidden="true" />
                          GitHub
                        </a>
                      )}
                      {activeMember.linkedin && (
                        <a
                          href={activeMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-800 transition-colors hover:border-slate-300 hover:text-[#4285F4] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                        >
                          <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                          LinkedIn
                        </a>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Click any portrait below to inspect coordinator profile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Portrait Roster Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {visibleMembers.map((member) => {
                const isSelected = member.id === activeMember.id;
                const isFacultyPortrait = member.group === 'Leadership & Faculty';
                return (
                  <article
                    key={member.id}
                    className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-150 ${
                      isSelected
                        ? 'border-[#4285F4] bg-white shadow-sm ring-1 ring-[#4285F4]/30 dark:border-[#4285F4] dark:bg-slate-900'
                        : 'border-slate-200/90 bg-slate-50/60 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedId(member.id)}
                      aria-pressed={isSelected}
                      className="flex flex-1 flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]"
                    >
                      <div className="relative w-full overflow-hidden">
                        <PortraitFrame
                          src={member.photo}
                          alt={`Portrait of ${member.name}, ${member.role}`}
                          initials={member.initials}
                          accentHex={member.accentHex}
                          fit={isFacultyPortrait ? 'contain' : 'cover'}
                          objectPos="top"
                          aspectClass="aspect-[4/3]"
                          className={
                            member.photoPosition === 'top'
                              ? 'bg-[#123368] dark:bg-[#123368]'
                              : isFacultyPortrait
                              ? 'bg-slate-100 dark:bg-slate-950'
                              : 'group-hover:[&_img]:scale-[1.03]'
                          }
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-4">
                        <div>
                          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            {member.yearOrTitle}
                          </p>
                          <h3 className="mt-0.5 font-display text-base font-bold text-slate-950 dark:text-white">
                            {member.name}
                          </h3>
                          <p
                            className="mt-0.5 text-xs font-semibold"
                            style={{
                              color: member.accentHex === '#FBBC04' ? '#D97706' : member.accentHex,
                            }}
                          >
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </button>

                    <div className="flex items-center justify-between border-t border-slate-200/70 px-4 py-2.5 dark:border-slate-800">
                      <span className="truncate text-[11px] text-slate-500 dark:text-slate-400">
                        {member.department}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} GitHub profile`}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                          >
                            <Github className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn profile`}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#4285F4] dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-[#4285F4]"
                          >
                            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Gallery */}
        <Reveal delay={0.1}>
          <div id="gallery" className="mt-16 border-t border-slate-200/80 pt-14 dark:border-slate-800">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D97706] dark:text-[#FBBC04]">
                Campus Moments
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                Community Gallery
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                Snapshots from recent study jams, hackathons, and engineering labs at RIT Hassan.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectGalleryItem(item)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] dark:border-slate-800 dark:bg-slate-900/75"
                >
                  <div className="relative w-full overflow-hidden">
                    <PhotoFrame
                      src={item.image}
                      alt={item.alt}
                      fit={item.id === 'gal-2' ? 'contain' : 'cover'}
                      aspectClass="aspect-[4/3]"
                      className={
                        item.id === 'gal-2'
                          ? 'bg-slate-950 dark:bg-slate-950'
                          : 'group-hover:[&_img]:scale-[1.04]'
                      }
                    />
                    <span
                      className="absolute right-3 bottom-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950/70 text-white opacity-0 backdrop-blur-xs transition-opacity duration-150 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.eventLabel} <span aria-hidden="true">·</span> {item.dateLabel}
                    </p>
                    <h3 className="mt-1 font-display text-sm font-bold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
