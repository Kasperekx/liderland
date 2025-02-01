import { Metadata } from 'next';
import { Hero } from '../../components/shared/Hero';
import { CatGrid } from '../../components/shared/CatGrid';

export const metadata: Metadata = {
  title: 'Liderland*PL - Nasze Kocury',
  description: 'Nasze koty hodowlane',
};

export default function Kocury() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <Hero translationKey="males" />
      <CatGrid pageType="males" columns={2} />
    </main>
  );
}
