'use client';
import React, { useRef, useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { contactform } from './style';
import { AuroraBackground } from '../components/ui/aurora-background';
import Lottie from 'lottie-react';
import successAnim from '../../../public/Animation - 1745539320690.json';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'your_service_id', // replace with your EmailJS service ID
        'your_template_id', // replace with your template ID
        formRef.current,
        'your_public_key' // replace with your public key
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error('Email send error:', err);
      });
  };

  return (
    <AuroraBackground>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-xl">
          <Typography
            variant="h1"
            className="text-center sm:text-left w-full text-4xl sm:text-5xl font-bold text-[#E9E9EC]"
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
                name="message"
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

          <AnimatePresence>
            {success && (
              <motion.div
                key="successAnimation"
                initial={{ opacity: 0, scale: 0.5, y: -50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="absolute top-10"
              >
                <Lottie
                  animationData={successAnim}
                  loop={false}
                  style={{ width: 150, height: 150 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </AuroraBackground>
  );
}

//TODO: Make the form work with emailjs and test it