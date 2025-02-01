'use client';

import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { IconCard } from '../ui/icon-card';
import { Award, Cat, Stethoscope } from 'lucide-react';
import { useLanguageWithRouter } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';

export function Features() {
  const { language } = useLanguageWithRouter();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <Badge className="px-3 sm:px-4 py-1 bg-pink-100 hover:bg-pink-100 text-pink-700 rounded-full text-sm mb-4">
            {t.features.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{t.features.title}</h2>
          <p className="text-gray-600 text-lg">{t.features.description}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <IconCard
              icon={<Award className="w-6 h-6" />}
              title={t.features.cards.pedigree}
              description={t.features.cards.pedigree_description}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <IconCard
              icon={<Stethoscope className="w-6 h-6" />}
              title={t.features.cards.health}
              description={t.features.cards.health_description}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <IconCard
              icon={<Cat className="w-6 h-6" />}
              title={t.features.cards.experience}
              description={t.features.cards.experience_description}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-pink-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-40" />
    </section>
  );
}
