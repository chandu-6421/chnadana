import { Reveal } from './Reveal';
import { PhotoFrame } from './LogoAsset';

const OBJECTIVES = [
  {
    number: '01',
    title: 'Peer-Led Hands-on Learning',
    detail:
      'Replace passive slide lectures with code-along study jams in Web Engineering, Kotlin Android, Cloud Run, and applied Gemini AI.',
    accent: '#4285F4',
  },
  {
    number: '02',
    title: 'Open-Source Campus Solutions',
    detail:
      'Ship practical software addressing real student and regional needs in Hassan—from commuter tracking to Kannada agri-tech tools.',
    accent: '#34A853',
  },
  {
    number: '03',
    title: 'Hackathon & Industry Readiness',
    detail:
      'Prepare undergraduate teams through CODESTORM 2026, architecture code reviews, Git workflows, and mock engineering interviews.',
    accent: '#EA4335',
  },
  {
    number: '04',
    title: 'Inclusive Technical Mentorship',
    detail:
      'Connect first-year freshmen directly with senior CSE leads, alumni engineers, and Google Developer Experts across Karnataka.',
    accent: '#FBBC04',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20 dark:border-slate-800/80 dark:bg-[#0E131D]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4285F4]">
                About the Chapter
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance] sm:text-4xl dark:text-white">
                Where university CS theory meets real-world engineering
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Google Developer Groups (GDG) on Campus is a university-based community program for
                students interested in Google developer technologies and open-source software. At{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Rajeev Institute of Technology, Hassan
                </strong>
                , our chapter operates in close partnership with the{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Department of Computer Science and Engineering
                </strong>
                .
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Whether you are writing your first Python loop in 1st semester or containerizing
                microservices in final year, our chapter gives you a collaborative lab, structured
                tracks, and teammates to build products that matter.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200/90 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#4285F4]">
                    Our Mission
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Cultivate an inclusive engineering culture at RIT Hassan where every student learns
                    modern development practices by building, shipping, and mentoring peers.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/90 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#34A853]">
                    Our Vision
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Establish Malnad and Hassan as a recognized hub for student-built open-source
                    software, regional problem solving, and national hackathon finalists.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900">
                <PhotoFrame
                  src="/assets/aistudio/rajeev_b05105ef.jpeg"
                  alt="Rajeev Institute of Technology, Hassan illuminated campus building"
                  aspectClass="aspect-[16/10]"
                />
                <div className="border-t border-slate-200/80 px-5 py-4 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Rajeev Institute of Technology · Dept. of CSE
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    B.M. Bypass Road, Hassan · Dedicated CSE Seminar Hall &amp; Cloud Project Labs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Core Objectives */}
        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-slate-200/80 pt-10 dark:border-slate-800">
            <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
              Chapter Objectives
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {OBJECTIVES.map((obj) => (
                <div
                  key={obj.number}
                  className="rounded-xl border border-slate-200/90 bg-white p-5 transition-colors duration-150 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700"
                >
                  <span
                    className="font-mono text-sm font-semibold"
                    style={{ color: obj.accent }}
                  >
                    {obj.number}.
                  </span>
                  <h4 className="mt-2 font-display text-base font-bold text-slate-950 dark:text-white">
                    {obj.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {obj.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
