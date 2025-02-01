'use client';

import { GalleryGrid } from '../gallery/GalleryGrid';
import { GalleryHero } from '../gallery/GalleryHero';

const images = [
  '/bella-2.jpg',
  '/parasolka.jpg',
  '/ada.jpg',
  '/skye.jpg',
  '/ala.jpg',
  '/sabrina.jpg',
  '/belka.jpg',
  '/ada-1.jpg',
  '/lalka.jpg',
  '/abii.jpg',
  '/bobek-2.jpg',
  '/enc.jpg',
  '/ollala-2.jpg',
  '/thomas-1.jpg',
  '/aluta.jpg',
  '/enric.jpg',
  '/parasol.jpg',
  '/belicita.jpg',
  '/lala.jpg',
  '/nela.jpg',
  '/bellura.jpg',
];
export function GalleryPage() {
  return (
    <main className="pt-24 bg-gradient-to-b from-white to-pink-50/30">
      <div className=" container mx-auto px-4">
        <GalleryHero />
        <GalleryGrid images={images} />
      </div>
    </main>
  );
}
