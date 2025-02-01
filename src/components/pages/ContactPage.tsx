'use client';

import { ContactHero } from '@/components/contact/ContactHero';
import { ContactCards } from '@/components/contact/ContactCards';
import { AdditionalInfo } from '@/components/contact/AdditionalInfo';

export function ContactPage() {
  return (
    <main className="pt-24 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-6xl mx-auto px-4">
        <ContactHero translationKey="contact" />
        <ContactCards translationKey="contact" />
        <AdditionalInfo translationKey="contact" />
      </div>
    </main>
  );
}
