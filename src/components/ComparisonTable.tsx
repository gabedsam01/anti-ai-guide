import { useLanguage } from '@/hooks/useLanguage';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
    aspect: { pt: string; en: string };
    generic: { pt: string; en: string };
    antiAI: { pt: string; en: string };
    genericBad?: boolean;
    antiAIGood?: boolean;
}

const comparisonData: ComparisonRow[] = [
    {
        aspect: { pt: 'Bordas', en: 'Borders' },
        generic: { pt: 'Super arredondadas (rounded-full)', en: 'Super rounded (rounded-full)' },
        antiAI: { pt: 'Retas, intencionais', en: 'Sharp, intentional' },
        genericBad: true,
        antiAIGood: true,
    },
    {
        aspect: { pt: 'Paleta de Cores', en: 'Color Palette' },
        generic: { pt: 'Gradientes roxo-azulados genéricos', en: 'Generic purple-blue gradients' },
        antiAI: { pt: 'Cores limitadas com propósito', en: 'Limited colors with purpose' },
        genericBad: true,
        antiAIGood: true,
    },
    {
        aspect: { pt: 'Tipografia', en: 'Typography' },
        generic: { pt: 'Inter, Poppins (defaults)', en: 'Inter, Poppins (defaults)' },
        antiAI: { pt: 'Fontes com personalidade', en: 'Fonts with personality' },
        genericBad: true,
        antiAIGood: true,
    },
    {
        aspect: { pt: 'Animações', en: 'Animations' },
        generic: { pt: 'Templates de biblioteca', en: 'Library templates' },
        antiAI: { pt: 'Micro-interações pensadas', en: 'Thoughtful micro-interactions' },
        genericBad: true,
        antiAIGood: true,
    },
    {
        aspect: { pt: 'Layouts', en: 'Layouts' },
        generic: { pt: 'Bento grids infinitos', en: 'Endless bento grids' },
        antiAI: { pt: 'Geometria honesta', en: 'Honest geometry' },
        genericBad: true,
        antiAIGood: true,
    },
    {
        aspect: { pt: 'Resultado', en: 'Result' },
        generic: { pt: 'Esquecível, intercambiável', en: 'Forgettable, interchangeable' },
        antiAI: { pt: 'Memorável, com alma', en: 'Memorable, with soul' },
        genericBad: true,
        antiAIGood: true,
    },
];

export function ComparisonTable() {
    const { language } = useLanguage();

    return (
        <div className="border-2 border-border bg-card">
            <Table>
                <TableHeader>
                    <TableRow className="border-b-2 border-border">
                        <TableHead className="font-display text-base">
                            {language === 'pt' ? 'Aspecto' : 'Aspect'}
                        </TableHead>
                        <TableHead className="font-display text-base text-destructive">
                            {language === 'pt' ? 'IA Genérica' : 'Generic AI'}
                        </TableHead>
                        <TableHead className="font-display text-base text-accent">
                            Anti-AI
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {comparisonData.map((row, index) => (
                        <TableRow key={index} className="border-b border-border">
                            <TableCell className="font-body font-medium">
                                {row.aspect[language]}
                            </TableCell>
                            <TableCell className="font-body">
                                <div className="flex items-center gap-2">
                                    {row.genericBad && <X className="w-4 h-4 text-destructive flex-shrink-0" />}
                                    <span className="text-muted-foreground">{row.generic[language]}</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-body">
                                <div className="flex items-center gap-2">
                                    {row.antiAIGood && <Check className="w-4 h-4 text-accent flex-shrink-0" />}
                                    <span>{row.antiAI[language]}</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
