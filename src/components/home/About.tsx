'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useFloatingAnimation } from '../../hooks/useFloatingAnimation';
import { useLanguageWithRouter } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';

export function About() {
  const { language } = useLanguageWithRouter();
  const t = translations[language as keyof typeof translations];

  const image1Ref = useFloatingAnimation(0);
  const image2Ref = useFloatingAnimation(1000);
  const image3Ref = useFloatingAnimation(500);
  const image4Ref = useFloatingAnimation(1500);

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white to-pink-50/50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center"
        >
          {/* Lewa strona - Zdjęcia */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative grid grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          >
            <div className="space-y-6 sm:space-y-8 lg:space-y-12 pt-8 sm:pt-12">
              <div
                ref={image1Ref}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <Image
                  src="/parasolka.jpg"
                  alt="Ragdoll kot"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                ref={image2Ref}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <Image
                  src="/bella-2.jpg"
                  alt="Ragdoll kot"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8 lg:space-y-12 pt-16">
              <div
                ref={image3Ref}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <Image
                  src="/enric.jpg"
                  alt="Ragdoll kot"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                ref={image4Ref}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <Image
                  src="/ada.jpg"
                  alt="Ragdoll kot"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Prawa strona - Tekst */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <Badge className="px-3 sm:px-4 py-1 bg-pink-100 hover:bg-pink-100 text-pink-700 rounded-full text-sm">
                {t.about.badge}
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{t.about.title}</h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">{t.about.description_main}</p>
              <p className="text-base sm:text-lg leading-relaxed">{t.about.description_second}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/galeria">
                <Button className="w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                  {t.about.button}
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Dekoracyjne elementy */}
      <div className="absolute top-1/2 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-pink-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-pink-50 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
