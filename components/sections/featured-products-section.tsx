"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Edits that match your channel style and feel like your brand.",
    description: "Style Match",
    image: "/images/lara1.png",
  },
  {
    title: "Fast turnaround without sacrificing quality.",
    description: "Speed + Quality",
    image: "/images/lara2.png",
  },
  {
    title: "Clear communication, quick updates, and easy feedback rounds.",
    description: "Communication",
    image: "/images/lara3.png",
  },
  {
    title: "Strong pacing and storytelling that keep viewers watching.",
    description: "Retention Focus",
    image: "/images/lara4.png",
  },
  {
    title: "Clean cuts, polished sound, and attention to detail.",
    description: "Polish",
    image: "/images/lara5.png",
  },
  {
    title: "Reliable delivery you can count on every upload.",
    description: "Consistency",
    image: "/images/lara6.png",
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
          6 Core strengths
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
