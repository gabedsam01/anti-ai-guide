import { useEffect, useRef } from 'react';
import * as anime from 'animejs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, X, Flame, Layers, Users, GitBranch, Sparkles, Heart, BookOpen, Moon, Sun, Globe, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { categories } from '@/data/categories';
import { getArticlesByCategory } from '@/data/articles';
import { Language } from '@/data/types';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const iconMap: Record<string, React.ElementType> = {
  flame: Flame, layers: Layers, users: Users,
  'git-branch': GitBranch, sparkles: Sparkles, heart: Heart, 'book-open': BookOpen,
};

interface MobileSidebarProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export function MobileSidebar({ language, isOpen, onClose, isDark, toggleTheme, toggleLanguage }: MobileSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);

  // Animação de entrada escalonada (stagger) com Anime.js
  // Cada item do menu aparece sequencialmente com delay de 50ms
  useEffect(() => {
    if (isOpen && navRef.current) {
      const elements = navRef.current.querySelectorAll('.nav-item');
      anime.set(elements, { opacity: 0, translateX: -20 });

      anime.animate(elements, {
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: anime.stagger(50, { start: 100 }),
        ease: 'outQuad',
        duration: 400
      });
    }
  }, [isOpen]);

  const handleLinkClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-72 p-0 bg-sidebar">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="font-display text-xl font-semibold text-foreground text-left">
            Anti-AI<span className="text-accent">.</span>Guide
          </SheetTitle>
          <p className="text-xs text-muted-foreground font-body text-left">
            {language === 'pt' ? 'Design com alma' : 'Design with soul'}
          </p>
        </SheetHeader>

        <nav ref={navRef} className="p-4 overflow-y-auto max-h-[calc(100vh-120px)]">
          {categories.map(category => {
            const Icon = iconMap[category.icon] || Layers;
            const articles = getArticlesByCategory(category.id);
            const isActive = location.pathname.includes('/' + category.id);

            return (
              <div key={category.id} className="mb-4">
                <div className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm font-ui font-medium nav-item opacity-0",
                  isActive ? "text-accent" : "text-foreground"
                )}>
                  <Icon className="w-4 h-4" />
                  <span>{category.title[language]}</span>
                </div>

                <ul className="ml-6 border-l border-border">
                  {articles.map(article => {
                    const articlePath = `/docs/${category.id}/${article.slug}`;
                    const isArticleActive = location.pathname === articlePath;

                    return (
                      <li key={article.id} className="nav-item opacity-0">
                        <button
                          onClick={() => handleLinkClick(articlePath)}
                          className={cn(
                            "w-full flex items-center gap-2 px-3 py-1.5 text-sm transition-colors text-left",
                            isArticleActive
                              ? "text-accent border-l-2 border-accent -ml-px bg-accent/5"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <ChevronRight className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{article.title[language]}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>

        {/* Footer with utility toggles - visible only on mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-sidebar">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-ui">{language === 'pt' ? 'English' : 'Português'}</span>
            </Button>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/gabedsam01/anti-ai-guide" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
