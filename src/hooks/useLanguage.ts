import { useState, useEffect } from 'react';
import { Language } from '@/data/types';

const LANGUAGE_KEY = 'anti-ai-guide-language';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANGUAGE_KEY);
      if (saved === 'pt' || saved === 'en') return saved;
      return navigator.language.startsWith('pt') ? 'pt' : 'en';
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState(prev => prev === 'pt' ? 'en' : 'pt');

  return { language, setLanguage, toggleLanguage };
}
