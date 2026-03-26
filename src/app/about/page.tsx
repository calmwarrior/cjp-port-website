import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Timeline } from "@/components/about/Timeline";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { education } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Chilean-German UX Designer and CX Strategist based in London with 15+ years across agencies, startups, and enterprise in Chile, the UK, and internationally. Speaks English, Spanish, German, and Italian. Diseñadora UX chileno-alemana con experiencia internacional.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
          {/* Portrait placeholder */}
          <AnimateOnScroll>
            <div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
              <Image
                src="/images/about/portrait.jpg"
                alt="Carolina Jofre Pfeil"
                width={600}
                height={800}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </AnimateOnScroll>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <AnimateOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                About Me
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="mt-6 text-lg text-foreground leading-relaxed">
                I&apos;m a curious CX consultant and designer with relevant experience
                in digital design, brand strategy, and business innovation. My
                customer-centric work has helped people and organisations explore
                new ways to deliver value and reignite growth.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="mt-4 text-text-secondary leading-relaxed">
                My experience encompasses developing and launching end-to-end
                design projects as well as getting involved at different stages of the
                problem-solving process. Playing a hands-on role, my work is
                tangible, co-creative, and cross-functional.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Chilean-German by heritage, London-based by choice. Over fifteen
                years, I&apos;ve collaborated with teams and partnered with clients
                across Chile and the United Kingdom &mdash; working
                independently and with agencies such as Interbrand, Oliver, Grey,
                and Daw. I speak English, Spanish, German, and some Italian.
                Today, I&apos;m a Senior UX Designer at Konrad Group in London,
                currently embedded within a leading UK retailer&apos;s product
                team working on financial services UX.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-24 md:mt-32">
          <AnimateOnScroll>
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-12">
              Experience
            </h2>
          </AnimateOnScroll>
          <Timeline />
        </div>

        {/* Education */}
        <div className="mt-24 md:mt-32">
          <AnimateOnScroll>
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-10">
              Education
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <div className="p-6 border border-border bg-surface">
                  <p className="text-xs text-text-muted mb-2">{edu.years}</p>
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {edu.institution}
                  </p>
                  {edu.alliance && (
                    <p className="mt-1 text-xs text-text-muted">{edu.alliance}</p>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24 md:mt-32">
          <AnimateOnScroll>
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-10">
              Skills & Tools
            </h2>
          </AnimateOnScroll>
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
}
