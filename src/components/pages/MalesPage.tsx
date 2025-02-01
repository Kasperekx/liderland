'use client';

import { Hero } from '@/components/shared/Hero';
import { CatGrid } from '@/components/shared/CatGrid';

export function MalesPage() {
  return (
    <main className="pt-24 bg-gradient-to-b from-white to-pink-50/30">
      <div className=" mx-auto px-4">
        <Hero translationKey="males" />
        <CatGrid pageType="males" columns={2} />
      </div>
    </main>
  );
}
