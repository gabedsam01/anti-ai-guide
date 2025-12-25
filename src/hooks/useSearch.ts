import { useMemo, useState, useCallback } from 'react';
import Fuse from 'fuse.js';
import { allArticles } from '@/data/articles';
import { Article, Language } from '@/data/types';

interface SearchResult {
  item: Article;
  score: number;
}

export function useSearch(language: Language) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const fuse = useMemo(() => {
    const searchableArticles = allArticles.map(article => ({
      ...article,
      searchTitle: article.title[language],
      searchDescription: article.description[language],
      searchContent: article.content[language],
    }));

    return new Fuse(searchableArticles, {
      keys: [
        { name: 'searchTitle', weight: 3 },
        { name: 'searchDescription', weight: 2 },
        { name: 'searchContent', weight: 1 },
      ],
      threshold: 0.4,
      includeScore: true,
      minMatchCharLength: 2,
    });
  }, [language]);

  const search = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchResults = fuse.search(searchQuery).slice(0, 8);
    setResults(searchResults.map(r => ({
      item: r.item as Article,
      score: r.score || 0,
    })));
  }, [fuse]);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  return {
    query,
    results,
    search,
    clearSearch,
  };
}
