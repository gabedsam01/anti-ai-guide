import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface MermaidDiagramProps {
    chart: string;
    className?: string;
}

mermaid.initialize({
    startOnLoad: false,
    theme: 'neutral',
    securityLevel: 'loose',
    fontFamily: 'var(--font-mono)',
});

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { theme } = useTheme();

    useEffect(() => {
        // Unique ID for this chart instance
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

        // Choose theme based on mode
        const mermaidTheme = theme === 'dark' ? 'dark' : 'neutral';

        // Configure mermaid with current theme
        mermaid.initialize({
            startOnLoad: false,
            theme: mermaidTheme,
            themeVariables: {
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                primaryColor: theme === 'dark' ? '#333' : '#eee',
                primaryTextColor: theme === 'dark' ? '#f0f0f0' : '#111',
                primaryBorderColor: theme === 'dark' ? '#555' : '#ccc',
                lineColor: theme === 'dark' ? '#00ff00' : '#ff0000', // Anti-AI accent colors
                secondaryColor: theme === 'dark' ? '#111' : '#fff',
                tertiaryColor: theme === 'dark' ? '#111' : '#fff',
            }
        });

        const renderChart = async () => {
            try {
                setLoading(true);
                setError(null);
                // Using mermaid API to render
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
            } catch (err) {
                console.error('Mermaid render error:', err);
                setError('Failed to render diagram');
            } finally {
                setLoading(false);
            }
        };

        renderChart();
    }, [chart, theme]);

    return (
        <div className={cn("my-8 p-6 bg-card border border-border overflow-x-auto rounded-none", className)}>
            <div className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-wider border-b border-border/50 pb-2">
        // Visual Data
            </div>

            {loading && (
                <div className="flex justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                </div>
            )}

            {error && (
                <div className="text-destructive text-sm font-mono p-4 border border-destructive">
                    Error: {error}
                </div>
            )}

            {svg && !loading && !error && (
                <div
                    ref={ref}
                    className="mermaid-wrapper flex justify-center"
                    dangerouslySetInnerHTML={{ __html: svg }}
                />
            )}
        </div>
    );
}
