import { Moon, Sun, Globe, Github, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language } from '@/data/types';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export function Header({ language, toggleLanguage, isDark, toggleTheme, onMenuClick, onSearchClick }: HeaderProps) {
  return (
    <header className="h-14 border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50 flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="w-5 h-5" />
        </Button>

        <button 
          onClick={onSearchClick}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-muted border border-border text-sm text-muted-foreground font-body hover:bg-muted/80 hover:text-foreground transition-colors"
        >
          <Search className="w-4 h-4" />
          <span>{language === 'pt' ? 'Buscar...' : 'Search...'}</span>
          <kbd className="ml-4 px-1.5 py-0.5 bg-background border border-border text-xs">⌘K</kbd>
        </button>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={onSearchClick}
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleLanguage} title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}>
          <Globe className="w-4 h-4" />
          <span className="ml-1 text-xs font-ui">{language.toUpperCase()}</span>
        </Button>

        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>

        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/lovable" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}
