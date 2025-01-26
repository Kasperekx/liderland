'use client';

import { Button } from '../components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/badge';
import { useEffect, useRef } from 'react';
import { IconCard } from '../components/ui/icon-card';
import { Award, Cat, Stethoscope } from 'lucide-react';

export default function Home() {
  // Optimize floating animation by reducing complexity and using transform
  const useFloatingAnimation = (delay: number = 0) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const startTime = Date.now() + delay;
      let animationFrameId: number;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        // Reduced amplitude and slower animation
        const position = Math.sin(elapsed / 1000) * 4;

        if (element) {
          // Use transform3d for better performance
          element.style.transform = `translate3d(0, ${position}px, 0)`;
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, [delay]);

    return ref;
  };

  // Referencje dla każdego zdjęcia z różnymi opóźnieniami
  const image1Ref = useFloatingAnimation(0);
  const image2Ref = useFloatingAnimation(1000);
  const image3Ref = useFloatingAnimation(500);
  const image4Ref = useFloatingAnimation(1500);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[100svh] ">
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
                // Add reduced motion support
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

            {/* Optimize motion animations */}
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
          </div>
        </div>
      </div>

      {/* O nas sekcja */}
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
                  O nas
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Pasja i Profesjonalizm w Hodowli Kotów Ragdoll
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6 text-gray-600">
                <p className="text-base sm:text-lg leading-relaxed">
                  Nasza hodowla to nie tylko miejsce, to prawdziwy dom dla wyjątkowych kotów rasy Ragdoll. Z pasją i
                  zaangażowaniem dbamy o każdego kociaka, zapewniając im najlepsze warunki rozwoju i miłość od
                  pierwszych dni życia.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Wszystkie nasze koty posiadają rodowody i są zarejestrowane w organizacji felinologicznej.
                </p>
              </div>

              {/* <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Card className="p-4 sm:p-6 space-y-2 bg-white/50 backdrop-blur border-pink-100">
                  <h3 className="text-xl sm:text-2xl font-semibold text-pink-700">15+</h3>
                  <p className="text-sm sm:text-base text-gray-600">Lat doświadczenia w hodowli</p>
                </Card>
                <Card className="p-4 sm:p-6 space-y-2 bg-white/50 backdrop-blur border-pink-100">
                  <h3 className="text-xl sm:text-2xl font-semibold text-pink-700">100%</h3>
                  <p className="text-sm sm:text-base text-gray-600">Zadowolonych właścicieli</p>
                </Card>
              </div> */}

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/galeria">
                  <Button className="w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                    Poznaj nasze koty
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Dekoracyjne elementy */}
        <div className="absolute top-1/2 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-pink-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-pink-50 rounded-full blur-3xl opacity-5bsolute bottom-1/4 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-40" />
      </section>

      {/* Nasze Atuty sekcja */}
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
              Nasze Atuty
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Dlaczego warto wybrać naszą hodowlę?
            </h2>
            <p className="text-gray-600 text-lg">Zapewniamy najwyższe standardy hodowli i troski o nasze koty</p>
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
                title="Rodowód"
                description="Wszystkie kocięta z naszej hodowli posiadają międzynarodowy rodowód FPL / FIFE"
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
                title="Opieka"
                description="Rodzice i wszystkie kocięta z naszej hodowli znajdują się pod stałą opieką weterynaryjną"
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
                icon={<Cat className="w-6 h-6" />}
                title="Doświadczenie"
                description="Wieloletnie doświadczenie w hodowli kotów rasy Ragdoll"
              />
            </motion.div>
          </div>
        </div>

        {/* Dekoracyjne elementy */}
        <div className="absolute top-1/4 left-0 w-24 h-24 bg-pink-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-40" />
      </section>
    </main>
  );
}
