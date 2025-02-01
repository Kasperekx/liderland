import { Metadata } from 'next';
import { ContactHero } from '../../components/contact/ContactHero';
import { ContactCards } from '../../components/contact/ContactCards';
import { AdditionalInfo } from '../../components/contact/AdditionalInfo';

export const metadata: Metadata = {
  title: 'Liderland*PL - Kontakt',
  description: 'Skontaktuj się z nami',
};

export default function Contact() {
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
