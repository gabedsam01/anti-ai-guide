import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { CodeBlock } from './CodeBlock';
import { MermaidDiagram } from './MermaidDiagram';

// Register standard ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface DocViewerProps {
  content: string;
  className?: string;
}

export function DocViewer({ content, className }: DocViewerProps) {
  const containerRef = useRef<HTMLElement>(null);

  // Helper to generate heading IDs (kept from your original code)
  const generateId = (text: string) => {
    return String(text)
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  useEffect(() => {
    // Wait for render/markdown parsing
    const timer = setTimeout(() => {
      // Fix: Scroll to top when content changes (Anti-AI: Don't disorient the user)
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll(
        'h1, h2, h3, p, li, blockquote, .code-container'
      );

      // Reset for re-animation
      ScrollTrigger.getAll().forEach(t => t.kill());

      // Batch animation for performance and cool effect
      ScrollTrigger.batch(elements, {
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out', overwrite: true }
          );
        },
        start: 'top 90%',
        once: true // Anti-AI: Read it once, don't play games with scrolling back and forth
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [content]);

  return (
    <article ref={containerRef} className={cn("prose prose-neutral dark:prose-invert max-w-none opacity-0 animate-fade-in-delayed", className)}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1
              id={generateId(String(children))}
              className="font-display text-4xl md:text-5xl font-semibold mb-6 text-foreground scroll-mt-20"
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              id={generateId(String(children))}
              className="font-display text-2xl md:text-3xl font-semibold mt-10 mb-4 text-foreground border-b border-border pb-2 scroll-mt-20"
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              id={generateId(String(children))}
              className="font-display text-xl md:text-2xl font-medium mt-8 mb-3 text-foreground scroll-mt-20"
            >
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="font-body text-base leading-relaxed mb-4 text-foreground/90">{children}</p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent pl-4 italic my-6 text-muted-foreground bg-muted/50 py-2">{children}</blockquote>
          ),
          code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || '');
            const isBlock = Boolean(match);

            if (isBlock) {
              if (match?.[1] === 'mermaid') {
                return (
                  <MermaidDiagram chart={String(children).replace(/\n$/, '')} />
                );
              }
              return (
                <div className="code-container">
                  <CodeBlock
                    code={String(children).replace(/\n$/, '')}
                    language={match?.[1] || 'typescript'}
                  />
                </div>
              );
            }
            return <code className="bg-muted px-1.5 py-0.5 text-sm font-body text-accent">{children}</code>;
          },
          pre: ({ children }) => (
            <>{children}</>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-1 font-body">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-1 font-body">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground/90">{children}</li>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-accent underline hover:text-accent/80 transition-colors">{children}</a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border font-body text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border bg-muted px-4 py-2 text-left font-medium">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-4 py-2">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
