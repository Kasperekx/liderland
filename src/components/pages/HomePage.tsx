'use client';

import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { About } from '@/components/home/About';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
    </main>
  );
}
