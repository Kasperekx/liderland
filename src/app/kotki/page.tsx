import { Metadata } from 'next';
import { Hero } from '../../components/shared/Hero';
import { CatGrid } from '../../components/shared/CatGrid';

export const metadata: Metadata = {
  title: 'Liderland*PL - Nasze Kotki',
  description: 'Nasze kotki hodowlane',
};

export default function Kotki() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <Hero translationKey="females" />
      <CatGrid pageType="females" columns={3} />
    </main>
  );
}
