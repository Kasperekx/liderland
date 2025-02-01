'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useRouter, usePathname } from 'next/navigation';

const pathMappings = {
  pl: {
    '/en': '/',
    '/en/contact': '/kontakt',
    '/en/males': '/kocury',
    '/en/females': '/kotki',
    '/en/gallery': '/galeria',
    '/en#about': '/#about',
  },
  en: {
    '/': '/en',
    '/kontakt': '/en/contact',
    '/kocury': '/en/males',
    '/kotki': '/en/females',
    '/galeria': '/en/gallery',
    '/#about': '/en#about',
  },
};

interface LanguageState {
  language: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'pl',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
    },
  ),
);

export function useLanguageWithRouter() {
  const { language, setLanguage } = useLanguageStore();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const mappings = pathMappings[newLanguage as keyof typeof pathMappings];
    const newPath =
      mappings[pathname as keyof typeof mappings] ??
      (newLanguage === 'en' ? `/en${pathname}` : pathname.replace('/en', ''));
    router.push(newPath);
  };

  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return path === '/' ? '/en' : `/en${path}`;
    }
    return path;
  };

  return { language, setLanguage: handleLanguageChange, getLocalizedPath };
}
