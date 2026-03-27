"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";

export function HeroSection() {
  return (
    <section className="relative bg-background">
      <BackgroundPaths />

      {/* Tagline Section */}
      <div className="px-6 pt-32 pb-28 md:pt-48 md:px-12 md:pb-36 lg:px-20 lg:pt-56 lg:pb-44">
        <p className="mx-auto max-w-2xl text-center text-2xl leading-relaxed text-muted-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          Strong, durable
          <br />
          and reliable.
        </p>
      </div>
    </section>
  );
}
