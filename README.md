# GDG on Campus – RIT Hassan

Official community web platform for **Google Developer Groups on Campus at Rajeev Institute of Technology, Hassan** (Department of Computer Science and Engineering). It serves as the central hub where students explore upcoming hackathons like CODESTORM 2026, register for hands-on learning tracks, browse student-built projects, meet the core team, and apply to join the chapter.

---

## Key Features

- **Institutional Identity & Logo System**: Displays official RIT Hassan, Dept. of CSE, and GDG on Campus logos (`/public/logos/rit.png`, `/public/logos/cse.png`, `/public/logos/gdg.png`) in the hero partner strip and footer with strict aspect-ratio preservation.
- **Light / Dark Theme Toggle**: Persisted theme switcher with Tailwind v4 `@custom-variant dark` and zero flash on initial load.
- **Live CODESTORM 2026 Countdown**: Real-time Days / Hours / Minutes / Seconds ticker using tabular numerals and quick squad registration.
- **Searchable & Filterable Events**: Filter upcoming and past sessions by keyword, category (`Hackathon`, `AI/ML`, `Web`, `Android`, `Cloud`), or status, with interactive registration modals.
- **Interactive Learning Tracks**: Tabbed syllabus viewer for Web Engineering, Android & Kotlin, AI/ML, and Cloud & DevOps.
- **Team Directory & Lightbox Gallery**: Filterable organizer cards (`Core Leads`, `Tech Leads`, `Faculty`) and click-to-expand community photo gallery.
- **Validated Membership & Contact Forms**: Client-side validation with Formspree integration (`VITE_FORMSPREE_JOIN_ID`, `VITE_FORMSPREE_CONTACT_ID`) plus an embedded Google Map for RIT Hassan.
- **Accessibility & Performance**: Semantic landmarks, ARIA labels, skip-to-content link, visible focus rings, `prefers-reduced-motion` support, and lazy-loaded photography.

---

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Typography**: Space Grotesk, Inter, JetBrains Mono
- **Animations**: Motion (`motion/react`) + IntersectionObserver count-up
- **Icons**: Lucide React
- **Forms**: Formspree (via `VITE_FORMSPREE_*` environment variables)

---

## Folder Structure

```text
├── public/
│   └── logos/
│       ├── rit.png             # Rajeev Institute of Technology logo
│       ├── cse.png             # Dept. of CSE logo
│       └── gdg.png             # GDG on Campus logo
├── src/
│   ├── assets/
│   │   └── images/             # Community, hackathon, workshop & campus photography
│   ├── components/
│   │   ├── AboutSection.tsx    # Chapter background, mission, vision, objectives
│   │   ├── EventsSection.tsx   # Searchable & filterable event cards
│   │   ├── Footer.tsx          # All three logos, quick links, social links
│   │   ├── Hero.tsx            # Hero banner, partner strip, countdown & animated stats
│   │   ├── JoinAndContact.tsx  # Validated Join & Contact forms + RIT Hassan map
│   │   ├── LogoAsset.tsx       # Aspect-preserved logo & resilient photo frame
│   │   ├── Modals.tsx          # Event registration & gallery lightbox dialogs
│   │   ├── Navbar.tsx          # Sticky responsive navigation & theme toggle
│   │   ├── Reveal.tsx          # Reduced-motion-safe scroll reveal wrapper
│   │   └── TracksAndGallery.tsx# Learning tracks, projects, team & gallery
│   ├── data/
│   │   └── communityData.ts    # Typed events, tracks, team, projects & gallery data
│   ├── hooks/
│   │   ├── useCountUp.ts       # IntersectionObserver stat counter
│   │   └── useTheme.ts         # Dark/light mode state & localStorage sync
│   ├── App.tsx                 # Main application composition
│   ├── index.css               # Tailwind v4 setup, dark variant & dot-grid pattern
│   └── main.tsx                # React entry point
├── .env.example                # Optional Formspree environment variable template
├── index.html                  # HTML entry, Google Fonts & pre-paint theme script
├── package.json
└── vite.config.ts
```

---

## Local Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Configure environment variables (optional for Formspree)**:
   Copy `.env.example` to `.env` and add your Formspree form IDs:
   ```env
   VITE_FORMSPREE_JOIN_ID=your_join_form_id
   VITE_FORMSPREE_CONTACT_ID=your_contact_form_id
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

---

## Deployment (GitHub → Vercel / Netlify)

Repository: `https://github.com/chandu-6421/gdg-rit-hassan-website.git`

### Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: GDG on Campus – RIT Hassan website"
git branch -M main
git remote add origin https://github.com/chandu-6421/gdg-rit-hassan-website.git
git push -u origin main
```

### Deploy on Vercel
1. Open [Vercel](https://vercel.com/new) → import `chandu-6421/gdg-rit-hassan-website`.
2. `vercel.json` automatically configures the Vite build (`npm run build`, output `dist`) and SPA routing.
3. Add `VITE_FORMSPREE_JOIN_ID` and `VITE_FORMSPREE_CONTACT_ID` under **Environment Variables** if using Formspree.
4. Click **Deploy**.

### Deploy on Netlify
1. Open [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project** → select `chandu-6421/gdg-rit-hassan-website`.
2. `netlify.toml` automatically sets **Build command** (`npm run build`) and **Publish directory** (`dist`).
3. Add optional `VITE_FORMSPREE_*` environment variables under **Site configuration → Environment variables**.
4. Click **Deploy site**.

---

## Credits

Built for **GDG on Campus – RIT Hassan**, Department of Computer Science and Engineering, **Rajeev Institute of Technology, Hassan, Karnataka**.
