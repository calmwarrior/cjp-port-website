import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

interface AboutTeaserProps {
  dict: any;
  locale: string;
}

export function AboutTeaser({ dict, locale }: AboutTeaserProps) {
  return (
    <section className="py-20 md:py-28 bg-neutral-100/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimateOnScroll>
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
              {dict.home.aboutSection}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
              {dict.home.aboutTeaser}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 text-text-secondary leading-relaxed">
              {dict.home.aboutTeaserDetail}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
            >
              {dict.home.moreAboutMe}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
