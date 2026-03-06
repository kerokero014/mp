'use client';
import React from 'react';
import { HoveredLink, Menu } from './ui/navbar-menu';
import { cn } from '../lib/utils';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
      <Menu>
        <HoveredLink href="/#home">
          Home
        </HoveredLink>
        <HoveredLink href="/#about">
          About
        </HoveredLink>
        <HoveredLink href="/#experience">
          Experience
        </HoveredLink>
        <HoveredLink href="/#projects">
          Projects
        </HoveredLink>
        <HoveredLink href="/#contact">
          Contact Me
        </HoveredLink>
      </Menu>
    </div>
  );
}
