import React from 'react';
import { Typography } from '@mui/material';

export default function ProjectsSection() {
  return (
    <div className="max-w-3xl">
      <Typography variant="h3" className="text-3xl sm:text-5xl font-bold">
        Projects
      </Typography>
      <Typography className="mt-4 text-base sm:text-lg text-neutral-700">
        This section highlights featured projects with problem statements, implementation details,
        and results.
      </Typography>
    </div>
  );
}
