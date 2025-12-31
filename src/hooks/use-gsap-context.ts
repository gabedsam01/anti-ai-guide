
import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap-config';

export const useGSAP = (
    effect: (context: gsap.Context) => void | (() => void),
    deps: React.DependencyList = []
) => {
    const scope = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(effect, scope);

        return () => {
            ctx.revert();
        };
    }, deps);

    return { scope };
};
