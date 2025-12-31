import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut
} from '@/components/ui/command';
import { Language } from '@/data/types';
import { FileText, Laptop, Moon, Sun, Home, BookOpen, Fingerprint } from 'lucide-react';
import { uxFoundationsArticles } from '@/data/articles/ux-foundations';

interface CommandMenuProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    language: Language;
    toggleLanguage: () => void;
    toggleTheme: () => void;
    isDark: boolean;
}

export function CommandMenu({ open, onOpenChange, language, toggleLanguage, toggleTheme, isDark }: CommandMenuProps) {
    const navigate = useNavigate();

    // Keyboard shortcut handler already managed by MainLayout or similar, 
    // but we ensure it works here too if needed, though usually just props are enough.

    const runCommand = (command: () => void) => {
        onOpenChange(false);
        command();
    };

    const getTranslatedTitle = (item: any) => {
        return item.title[language] || item.title.en;
    };

    return (
        <CommandDialog open={open} onOpenChange={onOpenChange}>
            <CommandInput placeholder={language === 'pt' ? "Digite um comando ou busque..." : "Type a command or search..."} />
            <CommandList className="font-mono">
                <CommandEmpty>{language === 'pt' ? "Nenhum resultado." : "No results found."}</CommandEmpty>

                <CommandGroup heading={language === 'pt' ? "Navegação" : "Navigation"}>
                    <CommandItem onSelect={() => runCommand(() => navigate('/'))}>
                        <Home className="mr-2 h-4 w-4" />
                        <span>Home</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => navigate('/docs/manifesto/what-is-anti-ai-design'))}>
                        <Fingerprint className="mr-2 h-4 w-4" />
                        <span>Manifesto</span>
                        <CommandShortcut>⌘M</CommandShortcut>
                    </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="UX Foundations">
                    {uxFoundationsArticles.map((article) => (
                        <CommandItem
                            key={article.id}
                            onSelect={() => runCommand(() => navigate(`/docs/${article.category}/${article.slug}`))}
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            <span>{getTranslatedTitle(article)}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading={language === 'pt' ? "Configurações" : "Settings"}>
                    <CommandItem onSelect={() => runCommand(toggleTheme)}>
                        {isDark ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                        <span>{isDark ? (language === 'pt' ? "Modo Claro" : "Light Mode") : (language === 'pt' ? "Modo Escuro" : "Dark Mode")}</span>
                        <CommandShortcut>⌘T</CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(toggleLanguage)}>
                        <Laptop className="mr-2 h-4 w-4" />
                        <span>{language === 'pt' ? "Switch to English" : "Mudar para Português"}</span>
                        <CommandShortcut>⌘L</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
