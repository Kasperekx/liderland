'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '../components/ui/badge';
// import { Button } from '../components/ui/button';
// import { Heart } from 'lucide-react';

interface CatCardProps {
  name: string;
  title: string;
  image: string;
  geneticTests: string[];
  color: string;

  birthDate?: string;
  bloodGroup?: string;
  index: number;
  isFemale?: boolean;
  labels: {
    title: string;
    color: string;
    geneticTests: string;
    birthDate?: string;
    bloodGroup?: string;
  };
}

export function CatCard({
  name,
  image,
  geneticTests,
  color,
  birthDate,
  bloodGroup,
  index,
  isFemale = false,
  labels,
}: CatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      {/* Zdjęcie w kółku */}
      <div className="relative mb-6">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-pink-100 shadow-lg hover:shadow-xl hover:shadow-pink-200/20 transition-all duration-300">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top rounded-full hover:scale-105 transition-transform duration-500"
          />
        </div>
        <motion.div className="absolute -bottom-3 left-1/2 -translate-x-1/2" whileHover={{ y: -2 }}></motion.div>
      </div>

      {/* Informacje */}
      <div className="space-y-6 max-w-md">
        {/* Nagłówek */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <p className="text-pink-600 font-medium">{labels.title}</p>
        </div>

        {/* Badania genetyczne */}
        {isFemale ? null : (
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-pink-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <h4 className="text-lg font-semibold">{labels.geneticTests}</h4>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {geneticTests.map((test, i) => (
                <Badge key={i} variant="outline" className="border-pink-200 text-pink-700 bg-pink-50/50">
                  {test}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Szczegóły */}
        <div className="grid grid-cols-2 gap-4 bg-pink-50/50 rounded-xl p-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{labels.color}</p>
            <p className="font-medium text-gray-900">{color}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-500">{isFemale ? labels.birthDate : labels.bloodGroup}</p>
            <p className="font-medium text-gray-900">{isFemale ? birthDate : bloodGroup}</p>
          </div>
        </div>

        {/* Przyciski */}
        {/* <div className="flex gap-4 justify-center pt-2">
          <Button className="bg-pink-500 hover:bg-pink-600">
            <Heart className="w-4 h-4 mr-2" /> Rodowód
          </Button>
        </div> */}
      </div>

      {/* Dekoracyjny element */}
      <div className="absolute -z-10 w-72 h-72 bg-gradient-to-b from-pink-100/20 to-transparent rounded-full blur-2xl opacity-60" />
    </motion.div>
  );
}
