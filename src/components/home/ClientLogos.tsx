import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { siteConfig } from "@/data/siteConfig";

export function ClientLogos() {
  return (
    <section className="py-16 border-y border-border bg-neutral-100/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="text-xs font-semibold text-text-muted tracking-wide uppercase text-center mb-10">
            Trusted by global brands
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {siteConfig.clients.map((client) => (
              <div
                key={client.name}
                className="text-text-muted/40 font-bold text-lg tracking-wide select-none hover:text-text-muted/70 transition-colors"
                title={client.name}
              >
                {client.name}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
