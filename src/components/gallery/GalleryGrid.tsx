'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryGridProps {
  images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const slides = images.map((src) => ({
    src: src,
    width: 3840,
    height: 2560,
  }));

  return (
    <>
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
              <p className="text-sm opacity-90">Liderland*PL</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={imageIndex} />
    </>
  );
}
