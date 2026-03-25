import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-28 bg-neutral-100/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimateOnScroll>
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
              About
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
              A curious CX consultant and designer with 15+ years across
              agencies, startups, and enterprise &mdash; in Chile, Germany,
              and the UK.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 text-text-secondary leading-relaxed">
              My customer-centric work has helped people and organisations
              explore new ways to deliver value and reignite growth. I believe
              the best design decisions come from understanding both the human
              need and the business constraint &mdash; then finding the creative
              tension between them.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
            >
              More about me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
