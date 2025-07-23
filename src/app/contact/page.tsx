'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import emailjs from '@emailjs/browser';
import { contactform } from './style';
import { AuroraBackground } from '../components/ui/aurora-background';
// import dynamic from 'next/dynamic';
import SuccessModal from '../components/ui/SuccessModal'; // adjust path as needed

export default function ContactPage() {
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
    <AuroraBackground>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-xl">
          <Typography
            variant="h2"
            className="text-center sm:text-left w-full text-xl md:text-2xl sm:text-5xl font-bold text-[#E9E9EC]"
          >
            Contact Me
          </Typography>

          <Typography
            variant="h6"
            className="text-center sm:text-left w-full text-lg sm:text-xl font-medium text-[#E9E9EC]"
          >
            Whether you have a question, a project idea, or just want to connect — shoot me a
            message!
          </Typography>

          <Box sx={contactform.box} className="flex flex-col gap-4 w-full">
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
          <SuccessModal open={success} onClose={() => setSuccess(false)} />
        </main>
      </div>
    </AuroraBackground>
  );
}
