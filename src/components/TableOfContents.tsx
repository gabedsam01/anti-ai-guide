import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { List } from 'lucide-react';
import { Language } from '@/data/types';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  language: Language;
}

export function TableOfContents({ content, language }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  const headings = useMemo(() => {
    const items: TOCItem[] = [];
    const regex = /^(#{2,3})\s+(.+)$/gm;
    let match;

    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      
      items.push({ id, text, level });
    }

    return items;
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="flex items-center gap-2 mb-4 text-sm font-ui text-muted-foreground">
          <List className="w-4 h-4" />
          <span>{language === 'pt' ? 'Neste artigo' : 'On this page'}</span>
        </div>

        <ul className="space-y-2 border-l border-border">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            
            return (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(heading.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setActiveId(heading.id);
                    }
                  }}
                  className={`
                    block text-sm font-body transition-colors
                    ${heading.level === 3 ? 'pl-6' : 'pl-4'}
                    ${isActive 
                      ? 'text-accent border-l-2 border-accent -ml-px' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {heading.text}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="toc-indicator"
                    className="absolute left-0 w-0.5 h-4 bg-accent"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
