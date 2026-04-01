"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(255,255,255,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const word = "rchiclipz";

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            
            const rect = sectionRef.current.getBoundingClientRect();
            const scrollableHeight = window.innerHeight * 1.5;
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
            
            const opacity = Math.max(0, 1 - progress);
            setScrollOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0" style={{ opacity: scrollOpacity }}>
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center" style={{ opacity: scrollOpacity }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-bold mb-8 tracking-tighter text-white">
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={letterIndex}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: letterIndex * 0.04,
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 25,
                                }}
                                className="inline-block text-white"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h1>

                    <p className="mb-10 text-xl font-medium tracking-wide text-white/85 sm:text-2xl">
                        Video Editor
                    </p>

                    <div
                        className="inline-block group relative bg-gradient-to-b from-white/10 to-black/10 
                        p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-6 py-6 text-2xl font-semibold backdrop-blur-md 
                            bg-white/10 hover:bg-white/20 border border-white/20
                            text-white transition-all duration-300 
                            group-hover:translate-y-2
                            hover:shadow-md"
                            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                scroll down ↓
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
