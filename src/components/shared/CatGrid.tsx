'use client';

import { motion } from 'framer-motion';
import { CatCard } from '../CatCard';
import { useLanguageWithRouter } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';

interface CatGridProps {
  pageType: 'males' | 'females';
  columns?: 2 | 3;
}

export function CatGrid({ pageType, columns = 2 }: CatGridProps) {
  const { language } = useLanguageWithRouter();
  const t = translations[language as keyof typeof translations];

  const isFemale = pageType === 'females';
  const cats = isFemale ? t.cats.females : t.cats.males;
  const labels = isFemale ? t.cats.labels.female : t.cats.labels.male;

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-${columns} gap-16 sm:gap-20`}>
          {cats.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CatCard {...cat} index={index} isFemale={isFemale} labels={labels} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
