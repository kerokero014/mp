'use client';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Typography, TextField, Button, Box } from '@mui/material';
import { contactform } from './contact/style';
import SuccessModal from './components/ui/SuccessModal';

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error('Email send error:', err);
      });
  };

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
            Computer science student and developer focused on building clean, useful web applications.
            I enjoy turning ideas into polished products and constantly improving my engineering skills.
          </Typography>
        </div>
      </section>

      <section id="experience" className="min-h-screen px-8 py-24 sm:px-20 flex items-center">
        <div className="max-w-3xl">
          <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
            Experience
          </Typography>
          <Typography className="mt-4 text-base sm:text-lg text-neutral-700">
            This section contains your work history, internships, and technical leadership experience.
          </Typography>
        </div>
      </section>

      <section id="projects" className="min-h-screen px-8 py-24 sm:px-20 flex items-center">
        <div className="max-w-3xl">
          <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
            Projects
          </Typography>
          <Typography className="mt-4 text-base sm:text-lg text-neutral-700">
            This section highlights featured projects with problem statements, implementation details, and results.
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
          <Box sx={contactform.box} className="flex flex-col gap-4 w-full mt-8">
            <form ref={formRef} onSubmit={sendEmail} className="w-full flex flex-col gap-6">
              <TextField
                sx={contactform.textField}
                label="Name"
                name="name"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                sx={contactform.textField}
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                sx={contactform.textField}
                label="Message"
                name="title"
                variant="outlined"
                required
                multiline
                rows={4}
                fullWidth
              />
              <Box className="flex justify-end">
                <Button sx={contactform.button} variant="contained" color="secondary" type="submit">
                  Send Message
                </Button>
              </Box>
            </form>
          </Box>
        </div>
      </section>
      <SuccessModal open={success} onClose={() => setSuccess(false)} />
    </main>
  );
}
