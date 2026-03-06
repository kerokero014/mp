'use client';
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import SuccessModal from './components/ui/SuccessModal';

export default function Home() {
  const [success, setSuccess] = useState(false);
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
        <div className="max-w-3xl">
          <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
            About
          </Typography>
          <Typography className="mt-4 text-base sm:text-lg text-neutral-700">
            Computer science student and developer focused on building clean, useful web
            applications. I enjoy turning ideas into polished products and constantly improving my
            engineering skills.
          </Typography>
        </div>
      </section>

      <section id="experience" className="min-h-screen px-8 py-24 sm:px-20 flex items-center">
        <div className="max-w-3xl">
          <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
            Experience
          </Typography>
          <Typography className="mt-4 text-base sm:text-lg text-neutral-700">
            This section contains your work history, internships, and technical leadership
            experience.
          </Typography>
        </div>
      </section>

      <section id="projects" className="min-h-screen px-8 py-24 sm:px-20 flex items-center">
        <div className="max-w-3xl">
          <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
            Projects
          </Typography>
          <Typography className="mt-4 text-base sm:text-lg text-neutral-700">
            This section highlights featured projects with problem statements, implementation
            details, and results.
          </Typography>
        </div>
      </section>

      <section id="contact" className="min-h-screen px-8 py-24 sm:px-20 flex items-center">
        <div className="w-full max-w-3xl">
          <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
            Contact Me
          </Typography>
          <Typography className="mt-4 text-base sm:text-lg text-neutral-700">
            Whether you have a question, a project idea, or just want to connect, send me an email.
          </Typography>
        </div>
      </section>
      <SuccessModal open={success} onClose={() => setSuccess(false)} />
    </main>
  );
}
