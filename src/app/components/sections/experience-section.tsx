import React from 'react';
import { Typography } from '@mui/material';

export default function ExperienceSection() {
  return (
    <div className="max-w-3xl">
      <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
        Experience
      </Typography>
      <Typography className="mt-4 text-base sm:text-lg text-neutral-400">
        This section contains your work history, internships, and technical leadership experience.
      </Typography>
    </div>
  );
}
