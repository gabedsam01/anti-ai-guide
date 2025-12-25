import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Flame, Layers, Users, GitBranch, Sparkles, Heart, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { categories } from '@/data/categories';
import { getArticlesByCategory } from '@/data/articles';
import { Language } from '@/data/types';

const iconMap: Record<string, React.ElementType> = {
  flame: Flame, layers: Layers, users: Users,
  'git-branch': GitBranch, sparkles: Sparkles, heart: Heart, 'book-open': BookOpen,
};

interface SidebarProps {
  language: Language;
}

export function Sidebar({ language }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="w-72 border-r border-border bg-sidebar h-screen overflow-y-auto sticky top-0 hidden lg:block">
      <div className="p-6 border-b border-border">
        <Link to="/" className="font-display text-xl font-semibold text-foreground">
          Anti-AI<span className="text-accent">.</span>Guide
        </Link>
        <p className="text-xs text-muted-foreground mt-1 font-body">
          {language === 'pt' ? 'Design com alma' : 'Design with soul'}
        </p>
      </div>

      <nav className="p-4">
        {categories.map(category => {
          const Icon = iconMap[category.icon] || Layers;
          const articles = getArticlesByCategory(category.id);
          const isActive = location.pathname.includes(`/${category.id}`);

          return (
            <div key={category.id} className="mb-4">
              <div className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm font-ui font-medium",
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
                    <li key={article.id}>
                      <Link
                        to={articlePath}
                        className={cn(
                          "flex items-center gap-2 px-3 py-1.5 text-sm transition-colors",
                          isArticleActive 
                            ? "text-accent border-l-2 border-accent -ml-px bg-accent/5" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <ChevronRight className="w-3 h-3" />
                        <span className="truncate">{article.title[language]}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
