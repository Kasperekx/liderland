'use client';

import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { Badge } from '../../components/ui/badge';
import Image from 'next/image';
import { Metadata } from 'next';

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
  '/ parasol.jpg',
  '/belicita.jpg',
  '/lala.jpg',
  '/nela.jpg',
  '/bellura.jpg',
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const slides = images.map((src) => ({
    src: src,
    width: 3840,
    height: 2560,
  }));

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-pink-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Creative Header Section */}
        <section className="relative overflow-hidden mb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(252,231,243,0.4)_0%,rgba(255,255,255,0)_60%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="container relative mx-auto px-4 pt-20 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-2 rounded-2xl bg-pink-50/50 p-2 pr-6 backdrop-blur-sm mb-8"
              >
                <Badge className="bg-pink-500 text-white px-3 py-1.5 rounded-xl">Galeria</Badge>
                <span className="text-sm font-medium text-pink-700">Liderland*PL</span>
              </motion.div>

              <motion.h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent mb-6">
                Magiczne Momenty
              </motion.h1>

              <motion.p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Odkryj wyjątkowe chwile uchwycone w obiektywie, które pokazują piękno i charakter naszych Ragdolli
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-pink-200 to-pink-100 opacity-40 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 opacity-30 blur-3xl" />
        </section>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/5] group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setImageIndex(index);
                setOpen(true);
              }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                quality={95}
                priority={index < 4}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                loading={index < 4 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {/* <p className="text-lg font-semibold">Ragdoll</p> */}
                <p className="text-sm opacity-90">Liderland*PL</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={imageIndex} />
    </main>
  );
}
