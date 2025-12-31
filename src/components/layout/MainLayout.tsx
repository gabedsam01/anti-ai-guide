import { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { MobileSidebar } from './MobileSidebar';
import { Header } from './Header';
import { BrutalFooter } from './BrutalFooter';
import { CommandMenu } from '@/components/CommandMenu';
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

  // Atalho de teclado: Ctrl/Cmd + K para abrir o CommandMenu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className="flex min-h-screen w-full bg-background font-mono">
      <Sidebar language={language} />
      <MobileSidebar
        language={language}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isDark={isDark}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          language={language}
          toggleLanguage={toggleLanguage}
          isDark={isDark}
          toggleTheme={toggleTheme}
          onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          onSearchClick={() => setSearchOpen(true)}
        />

        <main className="flex-1 p-4 lg:p-10 relative z-10">
          <div className="max-w-7xl mx-auto">
            <Outlet context={{ language }} />
          </div>
        </main>
        <BrutalFooter />
      </div>

      <CommandMenu
        open={searchOpen}
        onOpenChange={setSearchOpen}
        language={language}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
    </div>
  );
}
