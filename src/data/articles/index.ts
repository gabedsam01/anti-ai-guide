import { Article, CategorySlug } from '../types';
import { manifestoArticles } from './manifesto';
import { uiFoundationsArticles } from './ui-foundations';
import { uxFoundationsArticles } from './ux-foundations';
import { methodologiesArticles } from './methodologies';
import { trends2025Articles } from './trends-2025';
import { ethicsAccessibilityArticles } from './ethics-accessibility';
import { caseStudiesArticles } from './case-studies';

// Combine all articles
export const allArticles: Article[] = [
  ...manifestoArticles,
  ...uiFoundationsArticles,
  ...uxFoundationsArticles,
  ...methodologiesArticles,
  ...trends2025Articles,
  ...ethicsAccessibilityArticles,
  ...caseStudiesArticles,
];

// Get articles by category
export const getArticlesByCategory = (category: CategorySlug): Article[] => {
  return allArticles
    .filter(article => article.category === category)
    .sort((a, b) => a.order - b.order);
};

// Get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return allArticles.find(article => article.slug === slug);
};

// Get article by ID
export const getArticleById = (id: string): Article | undefined => {
  return allArticles.find(article => article.id === id);
};

// Get all article slugs for routing
export const getAllArticleSlugs = (): string[] => {
  return allArticles.map(article => article.slug);
};

// Get next and previous articles
export const getAdjacentArticles = (currentSlug: string): { 
  prev: Article | null; 
  next: Article | null 
} => {
  const currentIndex = allArticles.findIndex(a => a.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? allArticles[currentIndex - 1] : null,
    next: currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null,
  };
};

// Search articles
export const searchArticles = (query: string, lang: 'pt' | 'en'): Article[] => {
  const lowerQuery = query.toLowerCase();
  
  return allArticles.filter(article => {
    const title = article.title[lang].toLowerCase();
    const description = article.description[lang].toLowerCase();
    const content = article.content[lang].toLowerCase();
    
    return title.includes(lowerQuery) || 
           description.includes(lowerQuery) || 
           content.includes(lowerQuery);
  });
};

// Export individual article arrays
export { 
  manifestoArticles, 
  uiFoundationsArticles, 
  uxFoundationsArticles,
  methodologiesArticles,
  trends2025Articles,
  ethicsAccessibilityArticles,
  caseStudiesArticles
};
