'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <div className="relative min-h-[100svh]">
      <div className="absolute inset-0">
        <Image
          src="/bela-hero.jpg"
          alt="Ragdoll kot"
          fill
          className="object-cover brightness-75 object-top"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="min-h-[100svh] flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              reducedMotion: 'user',
            }}
            className="text-center w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4 mt-32"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                reducedMotion: 'user',
              }}
              className="text-base sm:text-lg md:text-xl font-medium tracking-[0.2em] uppercase text-white/90"
            >
              Profesjonalna hodowla kotów Ragdoll
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
            >
              Liderland<span className="text-pink-400">*PL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200/90 leading-relaxed max-w-2xl mx-auto px-4"
            >
              Witaj w świecie przepięknych kotów Ragdoll, gdzie elegancja spotyka się z czułością
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6"
            >
              <Link href="/kontakt">
                <Button className="w-full sm:w-auto bg-pink-500 hover:bg-pink-400 text-white px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
                  Skontaktuj się z nami
                </Button>
              </Link>
              <Link href="/#about">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/80 text-white hover:text-pink-400 hover:border-pink-400 hover:bg-white/5 px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  O hodowli
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <ScrollIndicator />
        </div>
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.8,
        duration: 0.5,
        reducedMotion: 'user',
      }}
      className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-2 sm:gap-3">
        <a href="#about" className="text-white/60 text-xs sm:text-sm tracking-wider uppercase">
          Przewiń w dół
        </a>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: 'easeInOut',
            reducedMotion: 'user',
          }}
          className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/60 border-t-0 border-l-0 rotate-45"
        />
      </div>
    </motion.div>
  );
}
