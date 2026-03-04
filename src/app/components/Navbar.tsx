'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  return (
    <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
      <Menu>
        <HoveredLink href="/" active={pathname === '/'}>
          Home
        </HoveredLink>
        <HoveredLink href="/about" active={pathname === '/about'}>
          About
        </HoveredLink>
        <HoveredLink href="/experience" active={pathname === '/experience'}>
          Experience
        </HoveredLink>
        <HoveredLink href="/projects" active={pathname === '/projects'}>
          Projects
        </HoveredLink>
        <HoveredLink href="/contact" active={pathname === '/contact'}>
          Contact Me
        </HoveredLink>
      </Menu>
    </div>
  );
}
