import { Metadata } from 'next';
import { GalleryHero } from '../../components/gallery/GalleryHero';
import { GalleryGrid } from '../../components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Liderland*PL - Galeria',
  description: 'Galeria naszych kotów',
};

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
  '/parasol.jpg',
  '/aluta.jpg',
  '/enric.jpg',
  '/parasol.jpg',
  '/belicita.jpg',
  '/lala.jpg',
  '/nela.jpg',
  '/bellura.jpg',
];

export default function Gallery() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-pink-50/30 to-white">
      <div className="container mx-auto px-4">
        <GalleryHero />
        <GalleryGrid images={images} />
      </div>
    </main>
  );
}
