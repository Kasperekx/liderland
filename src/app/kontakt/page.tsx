'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liderland*PL - Kontakt',
  description: 'Skontaktuj się z nami',
};

const contactInfo = [
  {
    title: 'Telefon',
    primary: '+48 577 509 503',
    secondary: 'Dostępni codziennie 9:00 - 20:00',
    icon: Phone,
    action: 'tel:+48577509503',
  },
  {
    title: 'Email',
    primary: 'liderlandcattery@gmail.com',
    secondary: 'Odpowiadamy w ciągu 24 godzin',
    icon: Mail,
    action: 'mailto:liderlandcattery@gmail.com',
  },
  {
    title: 'Lokalizacja',
    primary: 'Województwo Śląskie',
    secondary: 'Polska',
    icon: MapPin,
    action: null,
  },
];

export default function Contact() {
  return (
    <main className="pt-24 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Modern Hero Section */}
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
                Masz pytania dotyczące naszych kotów? Chętnie na nie odpowiemy i pomożemy Ci w wyborze idealnego
                towarzysza.
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
                    alt="Mapa"
                    fill
                    className="object-cover rounded-md object-center   transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Existing Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-pink-50 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-2">{info.primary}</p>
                <p className="text-gray-500 text-sm">{info.secondary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Existing Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center pb-16"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hodowla kotów rasowych Liderland*PL znajduje się w województwie śląskim. Dokładną lokalizację udostępniamy
            po umówieniu spotkania.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
