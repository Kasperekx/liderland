'use client';

import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';

export function GalleryHero() {
  return (
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
  );
}
