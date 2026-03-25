import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { siteConfig } from "@/data/siteConfig";

export function CapabilitiesStrip() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
            What I Do
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl leading-snug mb-10">
            From research to strategy to production-ready design &mdash;
            I work across the full experience lifecycle.
          </p>
        </AnimateOnScroll>

        <div className="flex flex-wrap gap-3">
          {siteConfig.capabilities.map((capability, index) => (
            <AnimateOnScroll key={capability} delay={index * 0.05}>
              <span className="px-5 py-2.5 text-sm font-medium rounded-full border border-border text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-default">
                {capability}
              </span>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
