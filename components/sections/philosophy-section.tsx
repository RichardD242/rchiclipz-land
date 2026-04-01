"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [obsidianTranslateX, setObsidianTranslateX] = useState(-100);
  const [forceTranslateX, setForceTranslateX] = useState(100);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;
    
    // Calculate progress based on scroll position
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    
    // Obsidian comes from left (-100% to 0%)
    setObsidianTranslateX((1 - progress) * -100);
    
    // Force comes from right (100% to 0%)
    setForceTranslateX((1 - progress) * 100);
    
    // Title fades out as blocks come together
    setTitleOpacity(1 - progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section id="products" className="bg-background">
      {/* Scroll-Animated Product Grid */}
      <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full">
            {/* Title - positioned behind the blocks */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
              style={{ opacity: titleOpacity }}
            >
              <h2 className="text-[12vw] font-medium leading-[0.95] tracking-tighter text-foreground md:text-[10vw] lg:text-[8vw] text-center px-6">
                Introduction Video.
              </h2>
            </div>

            {/* Video Container - blends in as text fades out */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
              <div 
                className="relative w-full overflow-hidden rounded-2xl" 
                style={{
                  opacity: 1 - titleOpacity,
                  transition: 'opacity 0.3s ease-out',
                }}
              >
                <video
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl bg-black"
                  style={{ display: titleOpacity > 0.95 ? 'none' : 'block' }}
                >
                  <source src="/videos/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36 lg:pb-14">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            rchiclipz approach
          </p>
          <p className="mt-8 leading-relaxed text-muted-foreground text-3xl text-center">
            I start by learning your style, audience, and goals. Then I edit fast, communicate clearly,
            and deliver polished videos that help your channel grow.
          </p>
        </div>
      </div>
    </section>
  );
}
