'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/stopeczka.jpg"
          alt="Ragdoll kot"
          fill
          className="object-cover object-top brightness-[0.6]"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {/* Column 1 - Brand */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Liderland<span className="text-pink-400">*PL</span>
              </h2>
              <p className="text-gray-300 max-w-md">
                Profesjonalna hodowla kotów rasy Ragdoll. Nasze koty to nie tylko zwierzęta, to członkowie rodziny.
              </p>
            </div>

            {/* Column 2 - Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Kontakt</h3>
              <div className="space-y-3">
                <a
                  href="tel:+48577509503"
                  className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+48 577 509 503</span>
                </a>
                <a
                  href="mailto:liderlandcattery@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>liderlandcattery@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Śląskie, Polska</span>
                </div>
              </div>
            </motion.div>

            {/* Column 3 - Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Social Media</h3>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Liderland*PL. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-pink-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-10" />
    </footer>
  );
}
