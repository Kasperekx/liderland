'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export function ContactHero() {
  return (
    <div className="relative mb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-pink-100 text-pink-800 rounded-full px-4 py-1.5 text-sm mb-6"
          >
            Skontaktuj się z nami
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight"
          >
            Porozmawiajmy o{' '}
            <span className="relative inline-block">
              kotach
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-pink-200/50 -z-10"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-lg mb-8 max-w-lg"
          >
            Masz pytania dotyczące naszych kotów? Chętnie na nie odpowiemy i pomożemy Ci w wyborze idealnego towarzysza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:+48577509503"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń teraz
            </a>
          </motion.div>
        </motion.div>

        {/* Right column - Decorative illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl transform rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-pink-100 rounded-3xl transform -rotate-3" />
            <div className="absolute inset-4 bg-white rounded-2xl shadow-sm flex items-center justify-center">
              <Image
                src="/pipka.jpg"
                alt="Kot"
                fill
                className="object-cover rounded-md object-center transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
