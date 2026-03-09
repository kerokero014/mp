'use client';
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import AboutSection from './components/sections/about-section';
import ExperienceSection from './components/sections/experience-section';
import ProjectsSection from './components/sections/projects-section';
import ContactSection from './components/sections/contact-section';

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <section id="home" className="min-h-screen px-8 pt-36 pb-20 sm:px-20 flex items-center">
        <div className="max-w-3xl">
          <Typography variant="h2" className="text-4xl sm:text-6xl font-bold">
            Kevin Mendoza
          </Typography>
          <Typography variant="h6" className="mt-4 text-lg sm:text-2xl text-neutral-700">
            Welcome to my portfolio.
          </Typography>
        </div>
      </section>

      <section id="about" className="min-h-screen px-8 py-24 sm:px-20 flex items-center">
        <AboutSection />
      </section>

      <section id="experience" className="min-h-screen px-8 py-24 sm:px-20 flex items-center">
        <ExperienceSection />
      </section>

      <section id="projects" className="min-h-screen px-8 py-24 sm:px-20 flex items-center">
        <ProjectsSection />
      </section>

      <section id="contact" className="min-h-screen px-8 py-24 sm:px-20 flex items-center">
        <ContactSection />
      </section>
    </main>
  );
}
