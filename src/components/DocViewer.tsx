import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { CodeBlock } from './CodeBlock';

interface DocViewerProps {
  content: string;
  className?: string;
}

export function DocViewer({ content, className }: DocViewerProps) {
  // Helper to generate heading IDs
  const generateId = (text: string) => {
    return String(text)
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  return (
    <article className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}>
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
              return (
                <CodeBlock 
                  code={String(children).replace(/\n$/, '')} 
                  language={match?.[1] || 'typescript'} 
                />
              );
            }
            return <code className="bg-muted px-1.5 py-0.5 text-sm font-body text-accent">{children}</code>;
          },
          pre: ({ children }) => {
            // The code component handles the pre wrapper now
            return <>{children}</>;
          },
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
