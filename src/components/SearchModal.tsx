import { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/hooks/useSearch';
import { getCategoryById } from '@/data/categories';
import { Language } from '@/data/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export function SearchModal({ isOpen, onClose, language }: SearchModalProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { query, results, search, clearSearch } = useSearch(language);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSelectedIndex(0);
    } else {
      clearSearch();
    }
  }, [isOpen, clearSearch]);

  const handleSelect = useCallback((index: number) => {
    const result = results[index];
    if (result) {
      navigate(`/docs/${result.item.category}/${result.item.slug}`);
      onClose();
    }
  }, [results, navigate, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        handleSelect(selectedIndex);
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [results.length, selectedIndex, handleSelect, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.15 }}
          className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-background border border-border shadow-2xl">
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => search(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={language === 'pt' ? 'Buscar artigos...' : 'Search articles...'}
                className="flex-1 bg-transparent text-foreground font-body text-lg outline-none placeholder:text-muted-foreground"
              />
              {query && (
                <button onClick={clearSearch} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="px-2 py-1 bg-muted border border-border text-xs text-muted-foreground font-ui">
                ESC
              </kbd>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="max-h-80 overflow-y-auto">
                {results.map((result, index) => {
                  const category = getCategoryById(result.item.category);
                  return (
                    <button
                      key={result.item.id}
                      onClick={() => handleSelect(index)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors ${
                        index === selectedIndex ? 'bg-muted' : 'hover:bg-muted/50'
                      }`}
                    >
                      <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-display font-medium text-foreground truncate">
                          {result.item.title[language]}
                        </div>
                        <div className="text-sm text-muted-foreground truncate font-body">
                          {category?.title[language]} • {result.item.description[language]}
                        </div>
                      </div>
                      {index === selectedIndex && (
                        <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Empty State */}
            {query.length >= 2 && results.length === 0 && (
              <div className="px-4 py-8 text-center text-muted-foreground font-body">
                {language === 'pt' 
                  ? `Nenhum resultado para "${query}"` 
                  : `No results for "${query}"`}
              </div>
            )}

            {/* Hint */}
            {query.length < 2 && (
              <div className="px-4 py-4 text-sm text-muted-foreground font-body">
                {language === 'pt' 
                  ? 'Digite pelo menos 2 caracteres para buscar' 
                  : 'Type at least 2 characters to search'}
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center gap-4 px-4 py-2 border-t border-border text-xs text-muted-foreground font-ui">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted border border-border">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-muted border border-border">↓</kbd>
                {language === 'pt' ? 'navegar' : 'navigate'}
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted border border-border">↵</kbd>
                {language === 'pt' ? 'selecionar' : 'select'}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
