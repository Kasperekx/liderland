import type { Metadata } from 'next';
import { Inter, Quicksand } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Liderland*PL | Hodowla Kotów Ragdoll',
  description: 'Profesjonalna hodowla kotów rasy Ragdoll. Poznaj nasze piękne kocięta z rodowodem.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${quicksand.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
