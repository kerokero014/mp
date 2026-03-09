import React from 'react';
import { Typography } from '@mui/material';

export default function ContactSection() {
  return (
    <div className="w-full max-w-3xl">
      <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
        Contact Me
      </Typography>
      <Typography className="mt-4 text-base sm:text-lg text-neutral-700">
        Whether you have a question, a project idea, or just want to connect, send me an email.
      </Typography>
    </div>
  );
}
