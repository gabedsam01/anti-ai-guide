import { useParams, useOutletContext, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { getArticleBySlug, getAdjacentArticles } from '@/data/articles';
import { getCategoryById } from '@/data/categories';
import { DocViewer } from '@/components/DocViewer';
import { TableOfContents } from '@/components/TableOfContents';
import { ReadingProgress } from '@/components/ReadingProgress';
import { Button } from '@/components/ui/button';
import { Language } from '@/data/types';

export default function DocPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useOutletContext<{ language: Language }>();

  const article = slug ? getArticleBySlug(slug) : null;
  const category = article ? getCategoryById(article.category) : null;
  const { prev, next } = slug ? getAdjacentArticles(slug) : { prev: null, next: null };

  if (!article || !category) {
    return (
      <div className="text-center py-20">
        <h1 className="font-display text-3xl mb-4">
          {language === 'pt' ? 'Artigo não encontrado' : 'Article not found'}
        </h1>
        <Button asChild variant="outline">
          <Link to="/">{language === 'pt' ? 'Voltar ao início' : 'Back to home'}</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <ReadingProgress />
      
      <div className="flex gap-8 animate-fade-in">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-ui">
            <Link to="/" className="hover:text-foreground transition-colors">
              {language === 'pt' ? 'Início' : 'Home'}
            </Link>
            <span>/</span>
            <span>{category.title[language]}</span>
            <span>/</span>
            <span className="text-foreground">{article.title[language]}</span>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 font-body">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime} min
            </span>
            {article.isNew && (
              <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium">
                NEW
              </span>
            )}
          </div>

          {/* Content */}
          <DocViewer content={article.content[language]} />

          {/* Navigation */}
          <nav className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            {prev ? (
              <Link to={`/docs/${prev.category}/${prev.slug}`} className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wide">{language === 'pt' ? 'Anterior' : 'Previous'}</div>
                  <div className="font-display font-medium text-foreground">{prev.title[language]}</div>
                </div>
              </Link>
            ) : <div />}

            {next ? (
              <Link to={`/docs/${next.category}/${next.slug}`} className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-right">
                <div>
                  <div className="text-xs uppercase tracking-wide">{language === 'pt' ? 'Próximo' : 'Next'}</div>
                  <div className="font-display font-medium text-foreground">{next.title[language]}</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </nav>
        </div>

        {/* Table of Contents */}
        <TableOfContents content={article.content[language]} language={language} />
      </div>
    </>
  );
}
