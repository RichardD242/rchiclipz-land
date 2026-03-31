"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Clean visual direction tailored to your brand.",
    description: "Design",
    image: "/images/tech1.png",
  },
  {
    title: "Production-ready builds with scalable foundations.",
    description: "Build Quality",
    image: "/images/tech2.png",
  },
  {
    title: "Focused client collaboration from kickoff to launch.",
    description: "Collaboration",
    image: "/images/tech3.png",
  },
  {
    title: "Performance-first pages tuned for conversions.",
    description: "Performance",
    image: "/images/tech4.png",
  },
  {
    title: "Precision implementation with modern tooling.",
    description: "Precision",
    image: "/images/tech5.png",
  },
  {
    title: "Dependable delivery, iteration, and long-term support.",
    description: "Reliability",
    image: "/images/tech6.png",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Why clients hire
          <br />
          rchiclipz
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Core strengths
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
