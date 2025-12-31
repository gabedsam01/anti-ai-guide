/**
 * GSAP Configuration - Centralized plugin registration
 * Import this file once at the app entry point (main.tsx)
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register all GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Configure global defaults
gsap.defaults({
    ease: 'power2.out',
    duration: 0.6,
});

// Configure ScrollTrigger defaults
ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
});

export { gsap, ScrollTrigger };
