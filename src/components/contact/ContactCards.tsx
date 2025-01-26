'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export interface ContactInfo {
  title: string;
  primary: string;
  secondary: string;
  iconType: 'mail' | 'phone' | 'map';
  action: string | null;
}

interface ContactCardsProps {
  contactInfo: ContactInfo[];
}

export function ContactCards({ contactInfo }: ContactCardsProps) {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'mail':
        return <Mail className="w-8 h-8 text-pink-500" />;
      case 'phone':
        return <Phone className="w-8 h-8 text-pink-500" />;
      case 'map':
        return <MapPin className="w-8 h-8 text-pink-500" />;
      default:
        return null;
    }
  };

  return (
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
              {getIcon(info.iconType)}
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">{info.title}</h3>
            <p className="text-gray-900 font-medium mb-2">{info.primary}</p>
            <p className="text-gray-500 text-sm">{info.secondary}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
