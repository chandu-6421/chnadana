export type EventCategory = 'All' | 'Hackathon' | 'AI/ML' | 'Web' | 'Android' | 'Cloud';
export type EventStatus = 'upcoming' | 'past';

export interface CommunityEvent {
  id: string;
  title: string;
  category: Exclude<EventCategory, 'All'>;
  status: EventStatus;
  dateLabel: string;
  isoDate: string;
  timeLabel: string;
  venue: string;
  seats: string;
  summary: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface LearningTrack {
  id: string;
  title: string;
  shortName: string;
  accentHex: string;
  lead: string;
  sessionsCount: number;
  schedule: string;
  description: string;
  topics: string[];
  outcome: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  group: 'Leadership & Faculty' | 'Student Coordinator';
  department: string;
  yearOrTitle: string;
  bio: string;
  quote: string;
  focusAreas: string[];
  photo: string;
  photoPosition?: 'top' | 'center';
  initials: string;
  accentHex: string;
  github?: string;
  linkedin?: string;
}

export interface StudentProject {
  id: string;
  title: string;
  domain: string;
  builders: string;
  description: string;
  techStack: string[];
  impactMetric: string;
  repoUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  eventLabel: string;
  dateLabel: string;
  caption: string;
  image: string;
  alt: string;
}

export const CLUB_INFO = {
  name: 'GDG on Campus – RIT Hassan',
  shortName: 'GDG RIT Hassan',
  college: 'Rajeev Institute of Technology, Hassan',
  department: 'Department of Computer Science and Engineering',
  location: 'Plot 1-D, Growth Centre, Industrial Area, B.M. Bypass Road, Hassan, Karnataka 573201',
  email: 'gdg.rithassan@gmail.com',
  socials: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/chandu-6421/gdg-rit-hassan-website',
  },
  nextEventIso: '2026-11-18T17:00:00+05:30',
  nextEventName: 'CODESTORM 2026',
};

export const COMMUNITY_STATS = [
  { id: 'members', label: 'Active Student Members', value: 420, suffix: '+', unit: 'Across CSE, ISE & AI' },
  { id: 'events', label: 'Technical Events Hosted', value: 28, suffix: '', unit: 'Since chapter launch' },
  { id: 'workshops', label: 'Hands-on Workshops', value: 18, suffix: '', unit: 'Web, Cloud, AI & Android' },
  { id: 'projects', label: 'Open-Source Projects', value: 35, suffix: '+', unit: 'Built by student teams' },
];

export const EVENTS: CommunityEvent[] = [
  {
    id: 'codestorm-2026',
    title: 'CODESTORM 2026 · Challenge 01',
    category: 'Hackathon',
    status: 'upcoming',
    dateLabel: 'November 18, 2026',
    isoDate: '2026-11-18T09:00:00+05:30',
    timeLabel: '09:00 AM – 05:00 PM IST',
    venue: 'Dept. of CSE, RIT Hassan',
    seats: 'Free Registration · Individual / Team',
    summary:
      'Think. Design. Develop. Deploy. Flagship Club Website Building Challenge organized by GDG on Campus and Dept. of CSE at RIT Hassan for Beginner to Advanced developers.',
    highlights: [
      'Creative Website Development & Modern UI/UX Design',
      'Responsive Web Design across mobile, tablet, and desktop',
      'Innovation & Functionality evaluated by CSE faculty & coordinators',
    ],
    image: '/assets/aistudio/code_17adce05.jpeg',
    imageAlt: 'CODESTORM 2026 official poster featuring Challenge 01 Club Website Building Challenge',
    featured: true,
  },
  {
    id: 'cloud-study-jam-2026',
    title: 'Cloud Study Jam: Containers & Cloud Run',
    category: 'Cloud',
    status: 'upcoming',
    dateLabel: 'November 29, 2026',
    isoDate: '2026-11-29T10:00:00+05:30',
    timeLabel: '10:00 AM – 01:30 PM IST',
    venue: 'CSE Cloud Lab 2, RIT Campus',
    seats: '80 Seats',
    summary:
      'Guided hands-on lab covering Docker containerization, artifact registries, and serverless deployment on Google Cloud Run with real-world CI/CD pipelines.',
    highlights: [
      'Containerize a full-stack Node.js and React service from scratch',
      'Automated GitHub Actions deployment workflow',
      'Earn Google Cloud Skills Boost completion badges',
    ],
    image: '/assets/college/csl2.jpg',
    imageAlt: 'RIT Hassan CSE computer lab session with faculty guiding students at workstations',
  },
  {
    id: 'gemini-ai-lab-2026',
    title: 'Applied AI Sprint: Building with Gemini API',
    category: 'AI/ML',
    status: 'upcoming',
    dateLabel: 'December 05, 2026',
    isoDate: '2026-12-05T02:00:00+05:30',
    timeLabel: '02:00 PM – 05:30 PM IST',
    venue: 'CSE Seminar Hall, Academic Block',
    seats: '100 Seats',
    summary:
      'Practical engineering session on structured JSON outputs, multimodal document understanding, and grounded retrieval workflows using the Gemini TypeScript SDK.',
    highlights: [
      'Build an academic PDF & syllabus assistant live in TypeScript',
      'Evaluation strategies for latency, cost, and accuracy',
      'Preparation briefing for CODESTORM 2026 AI track',
    ],
    image: '/assets/college/csl4.jpg',
    imageAlt: 'RIT Hassan CSE lab projector session with students at computer workstations',
  },
  {
    id: 'android-compose-camp',
    title: 'Android Compose Camp',
    category: 'Android',
    status: 'past',
    dateLabel: 'October 14, 2026',
    isoDate: '2026-10-14T10:00:00+05:30',
    timeLabel: '10:00 AM – 04:00 PM IST',
    venue: 'CSE Project Lab, RIT Hassan',
    seats: '95 Attendees',
    summary:
      'Full-day Kotlin and Jetpack Compose bootcamp where students built an offline-first campus timetable app with Material 3 adaptive layouts.',
    highlights: [
      'State hoisting, Navigation Compose, and Room local persistence',
      'Material 3 dynamic color theming and accessibility checks',
    ],
    image: '/assets/college/csl3.jpg',
    imageAlt: 'CSE mentor guiding RIT students side-by-side at lab workstations',
  },
  {
    id: 'web-perf-react-19',
    title: 'Modern Web & React Performance Workshop',
    category: 'Web',
    status: 'past',
    dateLabel: 'September 20, 2026',
    isoDate: '2026-09-20T10:00:00+05:30',
    timeLabel: '10:00 AM – 01:00 PM IST',
    venue: 'CSE Seminar Hall, RIT Hassan',
    seats: '110 Attendees',
    summary:
      'Deep dive into TypeScript type safety, Tailwind CSS architecture, accessibility standards, and Core Web Vitals optimization for student portfolios.',
    highlights: [
      'Semantic HTML, ARIA landmarks, and keyboard navigation audit',
      'Zero-layout-shift image loading and bundle splitting',
    ],
    image: '/assets/college/csl1.jpg',
    imageAlt: 'RIT Hassan CSE students practicing coding in the department lab',
  },
  {
    id: 'codestorm-qualifier-2026',
    title: 'CODESTORM 2026 Ideathon & Qualifier',
    category: 'Hackathon',
    status: 'past',
    dateLabel: 'August 09, 2026',
    isoDate: '2026-08-09T09:30:00+05:30',
    timeLabel: '09:30 AM – 03:30 PM IST',
    venue: 'RIT Main Auditorium',
    seats: '180 Attendees',
    summary:
      'Opening ideathon and problem-statement sprint connecting freshman and senior engineering squads ahead of the annual hackathon cycle.',
    highlights: [
      '38 initial problem pitches reviewed by CSE faculty panel',
      'Team formation mixer across 2nd, 3rd, and final-year students',
    ],
    image: '/src/assets/images/event_codestorm_1794980371074.jpg',
    imageAlt: 'Student hackathon teams pitching and building prototypes inside the auditorium',
  },
];

export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: 'web',
    title: 'Web Engineering',
    shortName: 'Web',
    accentHex: '#4285F4',
    lead: 'Yashawantha H M & CSE Mentors',
    sessionsCount: 6,
    schedule: 'Bi-weekly Saturdays · 02:00 PM',
    description:
      'Master modern frontend architecture, TypeScript, accessible UI engineering, and full-stack Node.js APIs built for production deployment.',
    topics: [
      'Semantic HTML5, CSS Grid & Tailwind Architecture',
      'React 19, TypeScript & State Management Patterns',
      'REST APIs, Authentication & Edge Deployment',
      'Web Performance, Lighthouse Audits & Accessibility',
    ],
    outcome: 'Ship a live, accessible full-stack web application deployed on Vercel or Cloud Run.',
  },
  {
    id: 'android',
    title: 'Android & Kotlin',
    shortName: 'Android',
    accentHex: '#34A853',
    lead: 'GDG RIT Android Cohort',
    sessionsCount: 5,
    schedule: 'Alternate Thursdays · 04:15 PM',
    description:
      'Build native Android applications with Kotlin, Jetpack Compose, clean MVVM architecture, and offline-first local storage.',
    topics: [
      'Kotlin Coroutines, Flow & Modern Language Idioms',
      'Jetpack Compose Declarative UI & Material 3',
      'Room Database, Retrofit & Offline Sync',
      'App Profiling, Testing & Play Console Readiness',
    ],
    outcome: 'Publish a campus utility Android APK with clean Material 3 navigation and local caching.',
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    shortName: 'AI / ML',
    accentHex: '#EA4335',
    lead: 'CSE AI & ML Study Group',
    sessionsCount: 5,
    schedule: 'Wednesdays · 04:00 PM',
    description:
      'Bridge classical ML foundations with applied multimodal LLMs, retrieval-augmented generation, and ethical model evaluation.',
    topics: [
      'Python Data Pipelines, NumPy & Scikit-Learn',
      'Neural Networks & Computer Vision Foundations',
      'Gemini API Structured Outputs & Tool Calling',
      'Vector Search, RAG Evaluation & Responsible AI',
    ],
    outcome: 'Build and benchmark a domain-focused AI tool for Kannada agri-tech or campus learning.',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    shortName: 'Cloud',
    accentHex: '#FBBC04',
    lead: 'GDG Cloud Study Jam Team',
    sessionsCount: 4,
    schedule: 'Fridays · 03:30 PM',
    description:
      'Learn Linux fundamentals, containerization, serverless compute, observability, and automated CI/CD pipelines on Google Cloud.',
    topics: [
      'Linux CLI, Networking & Reverse Proxies',
      'Docker Multi-Stage Builds & Container Security',
      'Cloud Run, Cloud Storage & IAM Least Privilege',
      'GitHub Actions CI/CD & Production Monitoring',
    ],
    outcome: 'Automate zero-downtime container deployments with reproducible infrastructure scripts.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'principal-1',
    name: 'Dr. Mahesh P K',
    role: 'Principal · Chief Patron',
    group: 'Leadership & Faculty',
    department: 'Rajeev Institute of Technology, Hassan',
    yearOrTitle: 'B.E., M.Tech., Ph.D.',
    bio: 'Leads institutional vision, industry-academia partnerships, and student innovation ecosystems across Rajeev Institute of Technology, Hassan.',
    quote:
      'Technical communities like GDG on Campus empower our engineering students to turn classroom fundamentals into impactful, real-world solutions.',
    focusAreas: ['Institutional Patronage', 'Innovation Ecosystem', 'Industry Collaboration'],
    photo: '/assets/aistudio/priciple_f2da5d42.jpeg',
    photoPosition: 'center',
    initials: 'MP',
    accentHex: '#4285F4',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'hod-1',
    name: 'Dr. Suresha D',
    role: 'Head of the Department – CSE',
    group: 'Leadership & Faculty',
    department: 'Dept. of CSE, RIT Hassan',
    yearOrTitle: 'Professor & HOD',
    bio: 'Heads the Department of Computer Science and Engineering and supports CODESTORM 2026, developer study jams, and student research labs.',
    quote:
      'Peer-led coding sprints and hands-on workshops inside our CSE labs build the engineering confidence every graduate needs.',
    focusAreas: ['Department Leadership', 'CODESTORM Governance', 'Academic Research'],
    photo: '/assets/aistudio/hod_28051386.jpeg',
    photoPosition: 'center',
    initials: 'SD',
    accentHex: '#34A853',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'prof-1',
    name: 'Prof. Shashikala M K',
    role: 'Event Coordinator',
    group: 'Leadership & Faculty',
    department: 'Dept. of CSE, RIT Hassan',
    yearOrTitle: 'Faculty Event Coordinator',
    bio: 'Coordinates CODESTORM 2026, technical workshops, challenge evaluations, and academic event scheduling with the CSE student core team.',
    quote:
      'Connecting freshmen with senior developer leads creates a supportive culture where students learn by building together.',
    focusAreas: ['Event Coordination', 'CODESTORM 2026', 'Student Mentorship'],
    photo: '/assets/aistudio/professor_9b398f1b.jpeg',
    photoPosition: 'top',
    initials: 'SM',
    accentHex: '#EA4335',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'prof-2',
    name: 'Prof. Dinesh S',
    role: 'Club Coordinator',
    group: 'Leadership & Faculty',
    department: 'Dept. of CSE, RIT Hassan',
    yearOrTitle: 'GDG Club Coordinator',
    bio: 'Serves as Club Coordinator for GDG on Campus – RIT Hassan, mentoring student project teams on architecture, coding sprints, and open-source practices.',
    quote:
      'Strong architectural foundations paired with collaborative open-source habits prepare RIT engineers for global technology teams.',
    focusAreas: ['Club Coordination', 'Technical Advising', 'Open Source Mentorship'],
    photo: '/assets/aistudio/professor2_53044820.jpeg',
    photoPosition: 'top',
    initials: 'DS',
    accentHex: '#FBBC04',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'lead-1',
    name: 'Yashawantha H M',
    role: 'Student Coordinator',
    group: 'Student Coordinator',
    department: 'Dept. of CSE, RIT Hassan',
    yearOrTitle: 'Student Coordinator',
    bio: 'Student Coordinator for GDG on Campus – RIT Hassan, organizing CODESTORM 2026, developer study jams, and peer-led campus initiatives.',
    quote:
      'Our goal is simple: every RIT student should graduate with deployed projects, peer teammates, and confidence to build from zero.',
    focusAreas: ['Student Coordination', 'CODESTORM 2026', 'Community Building'],
    photo: '/src/assets/images/coord_lead_rohan_1794983318318.jpg',
    initials: 'YH',
    accentHex: '#4285F4',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'proj-campus-transit',
    title: 'RIT Transit Live',
    domain: 'Android · Maps',
    builders: 'RIT CSE Android Squad',
    description:
      'Real-time college shuttle route tracker covering Hassan town stops with ETA notifications and offline route caching.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Maps SDK'],
    impactMetric: '650+ active student commuters',
    repoUrl: 'https://github.com',
  },
  {
    id: 'proj-agrisense',
    title: 'KrishiMitra Hassan',
    domain: 'AI / ML · Web',
    builders: 'RIT CSE AI & ML Team',
    description:
      'Multimodal crop leaf diagnostics and local weather advisory in Kannada and English for Hassan district farmers.',
    techStack: ['React', 'TypeScript', 'Gemini API', 'FastAPI'],
    impactMetric: 'Finalist at State Agri-Tech Showcase',
    repoUrl: 'https://github.com',
  },
  {
    id: 'proj-notes-hub',
    title: 'VTU CSE Notes & Lab Archive',
    domain: 'Web · Open Source',
    builders: 'GDG RIT Hassan Web Team',
    description:
      'Peer-reviewed repository of VTU computer science lab manuals, previous question papers, and interactive algorithm visualizers.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Markdown'],
    impactMetric: '1,900+ monthly campus downloads',
    repoUrl: 'https://github.com',
  },
  {
    id: 'proj-codestorm-judge',
    title: 'CodeStorm Submission Portal',
    domain: 'Cloud · DevOps',
    builders: 'Yashawantha H M & CSE Contributors',
    description:
      'Containerized hackathon judging and team check-in platform built to handle mentor slots, rubric scoring, and demo queues.',
    techStack: ['Node.js', 'Docker', 'Cloud Run', 'PostgreSQL'],
    impactMetric: 'Powers 60+ teams at CODESTORM',
    repoUrl: 'https://github.com',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Dept. of CSE Main Computer Lab',
    eventLabel: 'RIT Hassan CSE Labs',
    dateLabel: 'Campus Facility',
    caption: 'Students practicing algorithms, web development, and cloud labs inside the RIT Hassan CSE laboratory.',
    image: '/assets/college/csl5.jpg',
    alt: 'Rajeev Institute of Technology CSE computer laboratory with students and faculty mentors',
  },
  {
    id: 'gal-2',
    title: 'CODESTORM 2026 Official Poster',
    eventLabel: 'Challenge 01 · Nov 18, 2026',
    dateLabel: '9 AM – 5 PM IST',
    caption: 'Club Website Building Challenge organized by GDG on Campus & Dept. of CSE, RIT Hassan.',
    image: '/assets/aistudio/code_17adce05.jpeg',
    alt: 'CODESTORM 2026 official poster listing coordinators and challenge highlights',
  },
  {
    id: 'gal-3',
    title: 'Cloud & ML Pipeline Workshop',
    eventLabel: 'Cloud Study Jam',
    dateLabel: 'September 2026',
    caption: 'Hands-on walkthrough of serverless pipelines and cloud architecture.',
    image: '/src/assets/images/workshop_ai_cloud_1794980370975.jpg',
    alt: 'Instructor explaining cloud ML pipeline diagram to student developers',
  },
  {
    id: 'gal-4',
    title: 'RIT Hassan Campus Block',
    eventLabel: 'Hassan, Karnataka',
    dateLabel: 'Academic Campus',
    caption: 'Engineering academic block and sunlit courtyard at Rajeev Institute of Technology, Hassan.',
    image: '/src/assets/images/campus_showcase_1794980372149.jpg',
    alt: 'Modern engineering institute academic block surrounded by green trees',
  },
];
