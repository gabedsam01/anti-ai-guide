import { useState, useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { glossaryTerms, getTermsByCategory, GlossaryTerm } from '@/data/glossary';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const categoryLabels: Record<GlossaryTerm['category'], { pt: string; en: string }> = {
    ui: { pt: 'Interface (UI)', en: 'Interface (UI)' },
    ux: { pt: 'Experiência (UX)', en: 'Experience (UX)' },
    methodology: { pt: 'Metodologia', en: 'Methodology' },
    general: { pt: 'Geral', en: 'General' },
};

const categoryColors: Record<GlossaryTerm['category'], string> = {
    ui: 'bg-accent text-accent-foreground',
    ux: 'bg-primary text-primary-foreground',
    methodology: 'bg-secondary text-secondary-foreground',
    general: 'bg-muted text-muted-foreground',
};

export default function GlossaryPage() {
    const { language } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<GlossaryTerm['category'] | 'all'>('all');

    const filteredTerms = useMemo(() => {
        let terms = selectedCategory === 'all' ? glossaryTerms : getTermsByCategory(selectedCategory);

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            terms = terms.filter(
                (term) =>
                    term.termPT.toLowerCase().includes(query) ||
                    term.termEN.toLowerCase().includes(query) ||
                    term.definitionPT.toLowerCase().includes(query) ||
                    term.definitionEN.toLowerCase().includes(query)
            );
        }

        return terms;
    }, [searchQuery, selectedCategory]);

    const categories: Array<GlossaryTerm['category'] | 'all'> = ['all', 'ui', 'ux', 'methodology', 'general'];

    // Estilos dos botões de filtro de categoria
    const filterButtonBase = 'px-3 py-1.5 text-xs font-ui uppercase tracking-wider border-2 transition-colors';
    const filterButtonActive = 'bg-foreground text-background border-foreground';
    const filterButtonInactive = 'bg-transparent text-foreground border-border hover:border-foreground';

    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            {/* Header */}
            <header className="mb-10">
                <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
                    {language === 'pt' ? 'Glossário Anti-AI' : 'Anti-AI Glossary'}
                </h1>
                <p className="text-muted-foreground font-body text-lg">
                    {language === 'pt'
                        ? 'Termos e definições-chave do guia, mantendo consistência bilíngue.'
                        : 'Key terms and definitions from the guide, maintaining bilingual consistency.'}
                </p>
            </header>

            {/* Search & Filters */}
            <div className="mb-8 space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder={language === 'pt' ? 'Buscar termos...' : 'Search terms...'}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-card border-2 border-border font-body text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`${filterButtonBase} ${selectedCategory === cat
                                ? filterButtonActive
                                : filterButtonInactive
                                }`}
                        >
                            {cat === 'all'
                                ? language === 'pt'
                                    ? 'Todos'
                                    : 'All'
                                : categoryLabels[cat][language]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Terms List */}
            <Accordion type="single" collapsible className="space-y-2">
                {filteredTerms.map((term) => (
                    <AccordionItem
                        key={term.id}
                        value={term.id}
                        className="border-2 border-border bg-card px-4"
                    >
                        <AccordionTrigger className="py-4 hover:no-underline">
                            <div className="flex items-center gap-3 text-left">
                                <span className="font-display text-lg font-medium">
                                    {language === 'pt' ? term.termPT : term.termEN}
                                </span>
                                <Badge className={`${categoryColors[term.category]} text-[10px] uppercase`}>
                                    {categoryLabels[term.category][language]}
                                </Badge>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 pt-2">
                            <p className="font-body text-muted-foreground leading-relaxed">
                                {language === 'pt' ? term.definitionPT : term.definitionEN}
                            </p>
                            {term.usage === 'keep-english' && language === 'pt' && (
                                <p className="mt-2 text-xs text-accent font-mono">
                                    [Termo mantido em inglês por convenção]
                                </p>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            {filteredTerms.length === 0 && (
                <div className="text-center py-16 text-muted-foreground font-body">
                    {language === 'pt' ? 'Nenhum termo encontrado.' : 'No terms found.'}
                </div>
            )}

            {/* Stats Footer */}
            <footer className="mt-12 pt-8 border-t-2 border-border text-center text-xs text-muted-foreground font-mono">
                {glossaryTerms.length} {language === 'pt' ? 'termos catalogados' : 'terms catalogued'} //
                SYS.GLOSSARY.V1
            </footer>
        </main>
    );
}
