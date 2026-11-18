/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { EVENTS, CommunityEvent, GalleryItem } from './data/communityData';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { TracksAndProjects } from './components/TracksAndProjects';
import { TeamAndGallery } from './components/TeamAndGallery';
import { JoinAndContact } from './components/JoinAndContact';
import { Footer } from './components/Footer';
import { EventRegistrationModal, GalleryLightboxModal } from './components/Modals';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedEvent, setSelectedEvent] = useState<CommunityEvent | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const codestormEvent = EVENTS.find((e) => e.id === 'codestorm-2026') ?? EVENTS[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-[#0B0F17] dark:text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#4285F4] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero onRegisterCodestorm={() => setSelectedEvent(codestormEvent)} />
        <AboutSection />
        <EventsSection onSelectEvent={setSelectedEvent} />
        <TracksAndProjects />
        <TeamAndGallery onSelectGalleryItem={setSelectedGalleryItem} />
        <JoinAndContact />
      </main>

      <Footer />

      <EventRegistrationModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
      <GalleryLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}
