import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SmoothScrollProvider } from './components/ui/SmoothScrollProvider';
import { AmbientBackground } from './components/ui/AmbientBackground';
import { IntroLoader } from './components/ui/IntroLoader';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Portfolio } from './components/sections/Portfolio';
import { EducationCertifications } from './components/sections/EducationCertifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [, setLoaded] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#070708] text-slate-100 font-sans selection:bg-white selection:text-black relative">
        {/* Dynamic Scroll-Linked Ambient Background */}
        <AmbientBackground />

        {/* Cinematic Intro Entrance */}
        <IntroLoader onComplete={() => setLoaded(true)} />

        {/* Header Navigation with Active Section Indicator */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <EducationCertifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
      <Analytics />
    </SmoothScrollProvider>
  );
};

export default App;
