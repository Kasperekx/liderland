'use client';

import Image from 'next/image';
import { useLanguageWithRouter } from '@/hooks/useLanguage';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguageWithRouter();

  const languages = {
    pl: { code: 'pl', icon: '/poland.png' },
    en: { code: 'en', icon: '/uk.png' },
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  const currentLang = languages[language as keyof typeof languages];
  const nextLang = languages[language === 'pl' ? 'en' : 'pl'];

  return (
    <button onClick={toggleLanguage} className="focus:outline-none" title={`Switch to ${nextLang.code}`}>
      <Image
        src={currentLang.icon}
        alt={`Switch to ${nextLang.code}`}
        width={20}
        height={20}
        className="hover:opacity-80 transition-opacity"
      />
    </button>
  );
}
