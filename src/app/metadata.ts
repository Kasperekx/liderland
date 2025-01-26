import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Liderland*PL - Hodowla Kotów Ragdoll',
    template: '%s | Liderland*PL',
  },
  description:
    'Profesjonalna hodowla kotów rasy Ragdoll. Nasze koty posiadają rodowody FPL/FIFE i są pod stałą opieką weterynaryjną.',
  keywords: ['hodowla kotów', 'ragdoll', 'koty rasowe', 'kocięta ragdoll', 'Śląsk', 'Polska', 'hodowla ragdoll'],
  authors: [{ name: 'Liderland*PL' }],
  creator: 'Liderland*PL',
  publisher: 'Liderland*PL',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://liderland.pl',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://liderland.pl',
    title: 'Liderland*PL - Hodowla Kotów Ragdoll',
    description:
      'Profesjonalna hodowla kotów rasy Ragdoll. Nasze koty posiadają rodowody FPL/FIFE i są pod stałą opieką weterynaryjną.',
    siteName: 'Liderland*PL',
    images: [
      {
        url: 'https://liderland.pl/og-image.jpg', // Remember to create this image
        width: 1200,
        height: 630,
        alt: 'Liderland*PL - Hodowla Kotów Ragdoll',
      },
    ],
  },
};
