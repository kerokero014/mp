'use client';
import React from 'react';

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <nav className="relative flex justify-center gap-3 rounded-full border border-black/10 bg-white/55 px-6 py-3 shadow-lg shadow-black/10 backdrop-blur-xl supports-[backdrop-filter]:bg-white/45 dark:border-white/20 dark:bg-black/35 dark:shadow-black/35 dark:supports-[backdrop-filter]:bg-black/30">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: React.ComponentProps<'a'>) => {
  return (
    <a
      {...rest}
      className="rounded-full px-3 py-1.5 text-sm font-medium text-neutral-800 dark:text-neutral-100"
    >
      {children}
    </a>
  );
};
