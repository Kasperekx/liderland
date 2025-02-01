'use client';

import { Hero } from '@/components/shared/Hero';
import { CatGrid } from '@/components/shared/CatGrid';

export function FemalesPage() {
  return (
    <main className="pt-24 bg-gradient-to-b from-white to-pink-50/30">
      <div className="mx-auto px-4">
        <Hero translationKey="females" />
        <CatGrid pageType="females" columns={3} />
      </div>
    </main>
  );
}
