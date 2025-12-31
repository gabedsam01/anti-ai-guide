
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { getArticlesByCategory } from '@/data/articles';
import { Language } from '@/data/types';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { useGSAP } from '@/hooks/use-gsap-context';
import { gsap, ScrollTrigger } from '@/lib/gsap-config';
import DecryptedText from '@/components/ui/decrypted-text';
import { ComparisonTable } from '@/components/ComparisonTable';

export default function HomePage() {
  const { language } = useOutletContext<{ language: Language }>();

  const title = language === 'pt' ? 'Design com Alma' : 'Design with Soul';
  const description = language === 'pt'
    ? 'Guia para vibe coders que querem criar interfaces memoráveis, fugindo da estética genérica de IA.'
    : 'A guide for vibe coders who want to create memorable interfaces, escaping generic AI aesthetics.';

  /**
   * Animações GSAP da página inicial
   * 1. Hero: Timeline sequencial (título → descrição → botão)
   * 2. Categorias: Scroll-triggered stagger reveal
   */
  useGSAP(() => {
    // Timeline da Hero Section: elementos entram em sequência
    const heroTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    heroTimeline.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "expo.out"
    })
      .from(".hero-description", {
        y: 20,
        opacity: 0,
        duration: 0.5
      }, "-=0.4")
      .from(".hero-button", {
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
      }, "-=0.3");

    // Cards de Categoria: aparecem ao scroll com efeito escalonado
    const categoriesSection = document.querySelector(".categories-section");
    const categoryCards = document.querySelectorAll(".category-card");

    if (categoriesSection && categoryCards.length > 0) {
      gsap.from(".category-card", {
        scrollTrigger: {
          trigger: ".categories-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        clearProps: "all"
      });
    }
  });

  return (
    <>
      <SEOHead title={title} description={description} path="/" />
      <div className="relative min-h-screen">
        {/* Background Grid - Global */}
        <RetroGrid className="opacity-10 dark:opacity-20 pointer-events-none fixed inset-0 z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <section className="py-20 md:py-32 border-b-2 border-border mb-12 relative overflow-hidden">
            <h1 className="font-display text-4xl sm:text-6xl md:text-9xl font-bold mb-8 leading-none tracking-tighter uppercase break-words">
              {language === 'pt' ? (
                <>
                  <span className="block overflow-hidden">
                    <DecryptedText
                      text="DESIGN"
                      animateOn="view"
                      revealDirection="start"
                      className="hero-text inline-block"
                      encryptedClassName="text-muted-foreground opacity-50"
                    />
                  </span>
                  <span className="block overflow-hidden">
                    <DecryptedText
                      text="COM ALMA"
                      animateOn="view"
                      revealDirection="end"
                      className="hero-text inline-block text-neon-green"
                      encryptedClassName="text-muted-foreground opacity-50"
                    />
                  </span>
                </>
              ) : (
                <>
                  <span className="block overflow-hidden">
                    <DecryptedText
                      text="DESIGN"
                      animateOn="view"
                      revealDirection="start"
                      className="hero-text inline-block"
                      encryptedClassName="text-muted-foreground opacity-50"
                    />
                  </span>
                  <span className="block overflow-hidden">
                    <DecryptedText
                      text="WITH SOUL"
                      animateOn="view"
                      revealDirection="end"
                      className="hero-text inline-block text-neon-green"
                      encryptedClassName="text-muted-foreground opacity-50"
                    />
                  </span>
                </>
              )}
            </h1>
            <p className="hero-description font-mono text-xl text-muted-foreground max-w-2xl mb-10 border-l-2 border-neon-green pl-4">
              {language === 'pt'
                ? 'Um guia para vibe coders que querem criar interfaces memoráveis, fugindo da estética genérica de IA.'
                : 'A guide for vibe coders who want to create memorable interfaces, escaping generic AI aesthetics.'}
            </p>
            <div className="hero-button">
              <Button asChild size="lg" className="font-mono text-lg h-14 px-8 bg-white text-black hover:bg-neon-green hover:text-black hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-transparent">
                <Link to="/docs/manifesto/what-is-anti-ai-design">
                  {language === 'pt' ? 'INICIAR_PROTOCOLO' : 'INIT_PROTOCOL'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Categories Grid */}
          <section className="categories-section pb-20">
            <h2 className="font-mono text-sm font-bold mb-8 uppercase tracking-widest text-muted-foreground">
              {language === 'pt' ? 'Explorar por categoria' : 'Explore by category'} //
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map(category => {
                const articles = getArticlesByCategory(category.id);
                const firstArticle = articles[0];

                return (
                  <Link
                    key={category.id}
                    to={firstArticle ? `/docs/${category.id}/${firstArticle.slug}` : '/'}
                    className="category-card group p-8 border-2 border-border bg-card hover:border-white hover:bg-zinc-900 transition-all active:scale-[0.98]"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display text-2xl font-bold group-hover:text-neon-green transition-colors uppercase">
                        {category.title[language]}
                      </h3>
                      <span className="font-mono text-xs border border-white/20 px-2 py-1">
                        {articles.length.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground mb-4 line-clamp-3">
                      {category.description[language]}
                    </p>
                    <div className="text-xs text-neon-green font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      {language === 'pt' ? 'Acessar dados ->' : 'Access Data ->'}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Comparison Table - Anti-AI vs Generic */}
          <section className="pb-20">
            <h2 className="font-mono text-sm font-bold mb-8 uppercase tracking-widest text-muted-foreground">
              {language === 'pt' ? 'Anti-AI vs IA Genérica' : 'Anti-AI vs Generic AI'} //
            </h2>
            <ComparisonTable />
          </section>
        </div>
      </div>
    </>
  );
}
