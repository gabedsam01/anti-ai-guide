
import { Meteors } from "@/components/magicui/meteors";
import { Marquee } from "@/components/ui/marquee";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

export function BrutalFooter() {
    const { language } = useLanguage();
    return (
        <footer className="relative border-t-2 border-border bg-black text-white p-10 overflow-hidden font-mono">
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <Meteors number={30} />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 uppercase text-neon-green">Anti-AI Guide</h3>
                    <p className="text-xs text-muted-foreground">
                        {language === 'pt' ? 'Resistência estética.' : 'Aesthetic resistance.'}
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-2">INDEX</h4>
                    <ul className="text-sm space-y-2">
                        <li><Link to="/" className="hover:text-neon-green hover:underline decoration-2 underline-offset-4">HOME</Link></li>
                        <li><Link to="/docs/manifesto/what-is-anti-ai-design" className="hover:text-neon-green hover:underline decoration-2 underline-offset-4">DOCS</Link></li>
                        <li><Link to="/glossary" className="hover:text-neon-green hover:underline decoration-2 underline-offset-4">GLOSSARY</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">SHORTCUTS</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground font-mono">
                        <li className="flex items-center gap-2">
                            <span className="bg-white/10 px-1 border border-white/20 text-xs">CTRL</span>
                            <span>+</span>
                            <span className="bg-white/10 px-1 border border-white/20 text-xs">K</span>
                            <span>SEARCH</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="my-8 border-y border-white/20 py-2">
                <Marquee className="[--duration:20s]" pauseOnHover>
                    {["INTENTIONALITY", "FRICTION", "SOUL", "CRAFT", "CHAOS", "HUMAN", "RAW", "NO-LLM"].map((item) => (
                        <span key={item} className="mx-4 text-sm font-bold text-white/50 hover:text-white transition-colors cursor-default">
                            {item} •
                        </span>
                    ))}
                </Marquee>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 text-center text-xs text-white/40">
                SYS.VER.4.0 // TITANIUM
            </div>
        </footer>
    );
}
