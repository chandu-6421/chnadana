import { useState } from 'react';
import { ArrowUpRight, BookOpen, CheckCircle2, Code2 } from 'lucide-react';
import { LEARNING_TRACKS, STUDENT_PROJECTS } from '../data/communityData';
import { Reveal } from './Reveal';

export function TracksAndProjects() {
  const [activeTrackId, setActiveTrackId] = useState(LEARNING_TRACKS[0].id);
  const activeTrack =
    LEARNING_TRACKS.find((track) => track.id === activeTrackId) || LEARNING_TRACKS[0];

  return (
    <section
      id="tracks"
      className="border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20 dark:border-slate-800/80 dark:bg-[#0E131D]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Learning Tracks */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#34A853]">
              Workshops &amp; Learning Tracks
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance] sm:text-4xl dark:text-white">
              Four structured engineering tracks
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              Select a track to explore its semester syllabus, mentor lead, weekly lab timing,
              and capstone deliverable.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
            {/* Track Tabs Column */}
            <div
              role="tablist"
              aria-label="Learning tracks"
              className="grid grid-cols-2 gap-3 lg:col-span-4 lg:grid-cols-1"
            >
              {LEARNING_TRACKS.map((track) => {
                const isSelected = track.id === activeTrack.id;
                return (
                  <button
                    key={track.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveTrackId(track.id)}
                    className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] ${
                      isSelected
                        ? 'border-slate-900 bg-white shadow-sm dark:border-slate-200 dark:bg-slate-900'
                        : 'border-slate-200/90 bg-white/60 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700 dark:hover:bg-slate-900/75'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span
                        className="font-mono text-xs font-semibold"
                        style={{ color: track.accentHex }}
                      >
                        {track.sessionsCount} Sessions
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {track.shortName}
                      </span>
                    </div>
                    <span className="mt-1.5 font-display text-base font-bold text-slate-950 dark:text-white">
                      {track.title}
                    </span>
                    <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Lead: {track.lead}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Track Detail Panel */}
            <div
              role="tabpanel"
              aria-label={activeTrack.title}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:col-span-8 dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 dark:border-slate-800">
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {activeTrack.schedule} <span aria-hidden="true">·</span> Track Lead: {activeTrack.lead}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-slate-950 dark:text-white">
                    {activeTrack.title}
                  </h3>
                </div>
                <span
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold text-white"
                  style={{ backgroundColor: activeTrack.accentHex === '#FBBC04' ? '#D97706' : activeTrack.accentHex }}
                >
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {activeTrack.sessionsCount} Lab Modules
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {activeTrack.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Core Curriculum
                </h4>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {activeTrack.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 rounded-lg border border-slate-200/80 bg-slate-50/70 p-3 text-sm text-slate-800 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: activeTrack.accentHex === '#FBBC04' ? '#D97706' : activeTrack.accentHex }}
                        aria-hidden="true"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center dark:border-slate-800">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong className="font-semibold text-slate-950 dark:text-white">
                    Track Deliverable:
                  </strong>{' '}
                  {activeTrack.outcome}
                </p>
                <a
                  href="#join"
                  className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100 whitespace-nowrap shrink-0 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                >
                  Enroll in Track
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Student Projects Showcase */}
        <Reveal delay={0.1}>
          <div id="projects" className="mt-16 border-t border-slate-200/80 pt-14 dark:border-slate-800">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4285F4]">
                  Built at RIT Hassan
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                  Student &amp; Community Projects
                </h2>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4285F4] hover:underline whitespace-nowrap shrink-0"
              >
                Explore Chapter Repositories
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {STUDENT_PROJECTS.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 transition-colors duration-150 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/75 dark:hover:border-slate-700"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {project.domain}
                      </span>
                      <span className="font-mono text-xs font-medium text-[#34A853]">
                        {project.impactMetric}
                      </span>
                    </div>

                    <h3 className="mt-2 flex items-center gap-2 font-display text-xl font-bold text-slate-950 dark:text-white">
                      <Code2 className="h-5 w-5 text-[#4285F4]" aria-hidden="true" />
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {project.techStack.join(' · ')}
                    </p>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source repository for ${project.title}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-[#4285F4] dark:text-slate-100 dark:hover:text-[#4285F4] whitespace-nowrap shrink-0"
                    >
                      Source Code
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
