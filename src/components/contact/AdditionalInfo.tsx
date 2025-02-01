'use client';

import { motion } from 'framer-motion';
import { useLanguageWithRouter } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';

interface AdditionalInfoProps {
  translationKey: keyof typeof translations.pl;
}

export function AdditionalInfo({ translationKey }: AdditionalInfoProps) {
  const { language } = useLanguageWithRouter();
  const t = translations[language as keyof typeof translations];
  const content = t[translationKey] as { additionalInfo: string };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="text-center pb-16"
    >
      <p className="text-gray-600 max-w-2xl mx-auto">{content.additionalInfo}</p>
    </motion.div>
  );
}
