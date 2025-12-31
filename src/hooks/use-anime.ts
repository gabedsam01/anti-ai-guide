import { useEffect, useRef } from 'react';
import { animate, type AnimationParams, type TargetsParam } from 'animejs';

export interface UseAnimeProps extends AnimationParams {
    targets?: TargetsParam;
}

export const useAnime = (params: UseAnimeProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const animationRef = useRef<any>(null);

    useEffect(() => {
        const { targets, ...rest } = params;

        if (targets) {
            animationRef.current = animate(targets, rest);
        }

        return () => {
            if (animationRef.current && animationRef.current.pause) {
                animationRef.current.pause();
            }
        };
    }, [JSON.stringify(params)]);

    return animationRef;
};
