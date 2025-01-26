import { Metadata } from 'next';
import { ContactHero } from '../../components/contact/ContactHero';
import { ContactCards, ContactInfo } from '../../components/contact/ContactCards';
import { AdditionalInfo } from '../../components/contact/AdditionalInfo';

export const metadata: Metadata = {
  title: 'Liderland*PL - Kontakt',
  description: 'Skontaktuj się z nami',
};

const contactInfo = [
  {
    title: 'Telefon',
    primary: '+48 577 509 503',
    secondary: 'Dostępni codziennie 9:00 - 20:00',
    iconType: 'phone',
    action: 'tel:+48577509503',
  },
  {
    title: 'Email',
    primary: 'liderlandcattery@gmail.com',
    secondary: 'Odpowiadamy w ciągu 24 godzin',
    iconType: 'mail',
    action: 'mailto:liderlandcattery@gmail.com',
  },
  {
    title: 'Lokalizacja',
    primary: 'Województwo Śląskie',
    secondary: 'Polska',
    iconType: 'map',
    action: null,
  },
];

export default function Contact() {
  return (
    <main className="pt-24 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-6xl mx-auto px-4">
        <ContactHero />
        <ContactCards contactInfo={contactInfo as ContactInfo[]} />
        <AdditionalInfo text="Hodowla kotów rasowych Liderland*PL znajduje się w województwie śląskim. Dokładną lokalizację udostępniamy po umówieniu spotkania." />
      </div>
    </main>
  );
}
