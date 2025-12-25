import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { getArticlesByCategory } from '@/data/articles';
import { Language } from '@/data/types';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';

export default function HomePage() {
  const { language } = useOutletContext<{ language: Language }>();

  const title = language === 'pt' ? 'Design com Alma' : 'Design with Soul';
  const description = language === 'pt'
    ? 'Guia para vibe coders que querem criar interfaces memoráveis, fugindo da estética genérica de IA.'
    : 'A guide for vibe coders who want to create memorable interfaces, escaping generic AI aesthetics.';

  return (
    <>
      <SEOHead title={title} description={description} path="/" />
      <div className="animate-fade-in">
        {/* Hero */}
        <section className="py-12 md:py-20 border-b border-border mb-12">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {language === 'pt' ? (
              <>Design com <span className="text-accent">Alma</span></>
            ) : (
              <>Design with <span className="text-accent">Soul</span></>
            )}
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mb-8">
            {language === 'pt'
              ? 'Um guia para vibe coders que querem criar interfaces memoráveis, fugindo da estética genérica de IA.'
              : 'A guide for vibe coders who want to create memorable interfaces, escaping generic AI aesthetics.'}
          </p>
          <Button asChild size="lg" className="font-ui">
            <Link to="/docs/manifesto/what-is-anti-ai-design">
              {language === 'pt' ? 'Começar a ler' : 'Start reading'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </section>

        {/* Categories Grid */}
        <section>
          <h2 className="font-display text-2xl font-semibold mb-6">
            {language === 'pt' ? 'Explorar por categoria' : 'Explore by category'}
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {categories.map(category => {
              const articles = getArticlesByCategory(category.id);
              const firstArticle = articles[0];

              return (
                <Link
                  key={category.id}
                  to={firstArticle ? `/docs/${category.id}/${firstArticle.slug}` : '/'}
                  className="group p-6 border border-border bg-card hover:border-accent/50 transition-colors"
                >
                  <h3 className="font-display text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                    {category.title[language]}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {category.description[language]}
                  </p>
                  <div className="text-xs text-muted-foreground font-body">
                    {articles.length} {language === 'pt' ? 'artigos' : 'articles'}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
