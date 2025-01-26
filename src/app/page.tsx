import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Features } from '@/components/home/Features';

export const metadata: Metadata = {
  title: 'Liderland*PL - Hodowla kotów Ragdoll',
  description: 'Profesjonalna hodowla kotów Ragdoll w Polsce',
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Features />
    </main>
  );
}
