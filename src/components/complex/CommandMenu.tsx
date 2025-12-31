
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"
import { RetroGrid } from "@/components/magicui/retro-grid"
import { useAnime } from "@/hooks/use-anime"
import { useCallback, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLanguage } from "@/hooks/useLanguage"

/**
 * QuickAccessMenu - Menu de acesso rápido via atalho de teclado
 * Atalho: Ctrl+K (Windows/Linux) ou Cmd+K (Mac)
 */
export function QuickAccessMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const { language } = useLanguage()

    // Atalho de teclado: Ctrl/Cmd + K para abrir/fechar o menu
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setIsOpen((prev) => !prev)
            }
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [])

    // Animação de entrada com Anime.js (scale + fade)
    useAnime({
        targets: ".command-dialog-enter",
        scale: [0.95, 1],
        opacity: [0, 1],
        duration: 200,
        easing: "easeOutExpo",
        autoplay: isOpen
    });

    const executeCommand = useCallback((command: () => unknown) => {
        setIsOpen(false)
        command()
    }, [])

    return (
        <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
            <div className="absolute inset-0 -z-10 pointer-events-none bg-black/50">
                <RetroGrid className="opacity-5" />
            </div>
            <CommandInput placeholder={language === 'pt' ? "DIGITE_COMANDO..." : "TYPE_COMMAND..."} />
            <CommandList className="border-t-2 border-transparent">
                <CommandEmpty>{language === 'pt' ? "SEM RESULTADOS." : "NO RESULTS."}</CommandEmpty>
                <CommandGroup heading={language === 'pt' ? "Paginas" : "Pages"}>
                    <CommandItem onSelect={() => executeCommand(() => navigate("/"))}>
                        {language === 'pt' ? "INICIO" : "HOME"}
                    </CommandItem>
                    <CommandItem onSelect={() => executeCommand(() => navigate("/docs/manifesto/what-is-anti-ai-design"))}>
                        MANIFESTO
                    </CommandItem>
                </CommandGroup>
            </CommandList>
            <div className="bg-black text-neon-green text-xs font-mono p-1 text-center border-t-2 border-border">
                SYSTEM_READY // V4.0
            </div>
        </CommandDialog>
    )
}
