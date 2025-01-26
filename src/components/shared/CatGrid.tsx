'use client';

import { motion } from 'framer-motion';
import { CatCard } from '../CatCard';

interface BaseCat {
  name: string;
  title: string;
  image: string;
  geneticTests: string[];
  color: string;
}

interface FemaleCat extends BaseCat {
  birthDate: string;
}

interface MaleCat extends BaseCat {
  bloodGroup: string;
}

interface CatGridProps {
  cats: (FemaleCat | MaleCat)[];
  isFemale: boolean;
  columns?: 2 | 3;
}

export function CatGrid({ cats, isFemale, columns = 2 }: CatGridProps) {
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
              <CatCard {...cat} index={index} isFemale={isFemale} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
