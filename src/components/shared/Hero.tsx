'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface HeroProps {
  title: string;
  highlightedWord: string;
  description: string;
}

export function Hero({ title, highlightedWord, description }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 to-white" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(252,231,243,0.4)_0%,rgba(255,255,255,0)_60%)]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mx-auto max-w-4xl text-center">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-8 bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            {title} <span className="text-pink-500">{highlightedWord}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            {description}
          </motion.p>

          <ScrollIndicator />
        </motion.div>
      </div>

      {/* Modern decorative elements */}
      <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-pink-200 to-pink-100 opacity-40 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 opacity-30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100 opacity-20 blur-2xl" />
    </section>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-16 flex justify-center"
    >
      <motion.button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 0.7,
            behavior: 'smooth',
          });
        }}
        whileHover={{ y: -2 }}
        animate={{
          y: [0, 4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="group flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-sm text-gray-500 group-hover:text-pink-500 transition-colors duration-300">
          Przewiń w dół
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400 group-hover:text-pink-500 transition-colors duration-300"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.button>
    </motion.div>
  );
}
