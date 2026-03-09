import React from 'react';
import { Typography } from '@mui/material';

export default function AboutSection() {
  return (
    <div className="max-w-3xl">
      <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
        About
      </Typography>
      <Typography className="mt-4 text-base sm:text-lg text-neutral-700">
        Computer science student and developer focused on building clean, useful web applications. I
        enjoy turning ideas into polished products and constantly improving my engineering skills.
      </Typography>
    </div>
  );
}
