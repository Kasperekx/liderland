'use client';

import { motion } from 'framer-motion';

interface AdditionalInfoProps {
  text: string;
}

export function AdditionalInfo({ text }: AdditionalInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="text-center pb-16"
    >
      <p className="text-gray-600 max-w-2xl mx-auto">{text}</p>
    </motion.div>
  );
}
