import { Metadata } from 'next';
import { Hero } from '../../components/shared/Hero';
import { CatGrid } from '../../components/shared/CatGrid';

export const metadata: Metadata = {
  title: 'Liderland*PL - Nasze Kotki',
  description: 'Nasze kotki hodowlane',
};

const cats = [
  {
    name: 'Bella Little Kings*PL',
    title: 'Kotka hodowlana',
    image: '/bella-2.jpg',
    geneticTests: ['HCM - N/N', 'PKD - N/N', 'FIV - ujemny', 'FeLV - ujemny'],
    color: 'Blue Bicolor',
    birthDate: '15.03.2021',
  },
  {
    name: 'Umbrella II Liderland*PL',
    title: 'Kotka hodowlana',
    image: '/parasolka.jpg',
    geneticTests: ['HCM - N/N', 'PKD - N/N', 'FIV - ujemny', 'FeLV - ujemny'],
    color: 'Seal Colorpoint',
    birthDate: '20.06.2022',
  },
  {
    name: 'Ada Midnight Heaven*PL',
    title: 'Kotka hodowlana',
    image: '/ada.jpg',
    geneticTests: ['HCM - N/N', 'PKD - N/N', 'FIV - ujemny', 'FeLV - ujemny'],
    color: 'Seal Mitted',
    birthDate: '20.06.2022',
  },
  {
    name: 'Skye Misiowe Marzenie*PL',
    title: 'Kotka hodowlana',
    image: '/skye.jpg',
    geneticTests: ['HCM - N/N', 'PKD - N/N', 'FIV - ujemny', 'FeLV - ujemny'],
    color: 'Blue Bicolor',
    birthDate: '20.06.2022',
  },
  {
    name: 'Alicja Midnight Heaven*PL',
    title: 'Kotka hodowlana',
    image: '/ala.jpg',
    geneticTests: ['HCM - N/N', 'PKD - N/N', 'FIV - ujemny', 'FeLV - ujemny'],
    color: 'Seal Colorpoint',
    birthDate: '20.06.2022',
  },
  {
    name: 'Sabrina Dianika*PL',
    title: 'Kotka hodowlana',
    image: '/sabrina.jpg',
    geneticTests: ['HCM - N/N', 'PKD - N/N', 'FIV - ujemny', 'FeLV - ujemny'],
    color: 'Seal Bicolor Lynx',
    birthDate: '20.06.2022',
  },
  // Możesz dodać więcej kotek
];

export default function Kotki() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <Hero
        title="Nasze"
        highlightedWord="Kotki"
        description="Poznaj nasze wspaniałe kotki hodowlane, które wyróżniają się nie tylko pięknym wyglądem, ale także wspaniałym charakterem."
      />
      <CatGrid cats={cats} isFemale={true} columns={3} />
    </main>
  );
}
