import { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { MobileSidebar } from './MobileSidebar';
import { Header } from './Header';
import { SearchModal } from '@/components/SearchModal';
import { useLanguage } from '@/hooks/useLanguage';

export function MainLayout() {
  const { language, toggleLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);
  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <div className="flex min-h-screen w-full bg-background noise-texture">
      <Sidebar language={language} />
      <MobileSidebar 
        language={language} 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          language={language}
          toggleLanguage={toggleLanguage}
          isDark={isDark}
          toggleTheme={toggleTheme}
          onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          onSearchClick={openSearch}
        />

        <main className="flex-1 p-4 lg:p-10">
          <div className="max-w-4xl mx-auto">
            <Outlet context={{ language }} />
          </div>
        </main>

        <footer className="border-t border-border p-4 text-center text-sm text-muted-foreground font-body">
          {language === 'pt' ? 'Feito com ❤️ pela comunidade Lovable' : 'Made with ❤️ by the Lovable community'}
        </footer>
      </div>

      <SearchModal 
        isOpen={searchOpen} 
        onClose={closeSearch} 
        language={language} 
      />
    </div>
  );
}
