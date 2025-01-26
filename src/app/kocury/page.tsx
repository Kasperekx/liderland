import { Metadata } from 'next';
import { Hero } from '../../components/shared/Hero';
import { CatGrid } from '../../components/shared/CatGrid';

export const metadata: Metadata = {
  title: 'Liderland*PL - Nasze Kocury',
  description: 'Nasze koty hodowlane',
};

const cats = [
  {
    name: 'Enrico Somisiowy Lasek*PL',
    title: 'Reproduktor',
    image: '/enrico.png',
    geneticTests: ['HCM - N/N', 'PKD - N/N', 'FIV - ujemny', 'FeLV - ujemny'],
    color: 'Blue Bicolor Lynx',
    bloodGroup: 'Ab',
  },
  {
    name: 'Thomas Bromelia*PL',
    title: 'Reproduktor',
    image: '/tomasz.png',
    geneticTests: ['HCM - N/N', 'PKD - N/N', 'FIV - ujemny', 'FeLV - ujemny'],
    color: 'Seal Mitted Lynx',
    bloodGroup: 'A',
  },
];

export default function Kocury() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <Hero
        title="Nasze"
        highlightedWord="Kocury"
        description="Poznaj naszych wyjątkowych reproduktorów, które wyróżniają się nie tylko pięknym wyglądem, ale także wspaniałym charakterem"
      />
      <CatGrid cats={cats} isFemale={false} columns={2} />
    </main>
  );
}
