import type { Metadata } from "next";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { siteConfig } from "@/data/siteConfig";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Carolina Jofre Pfeil for UX design, CX strategy, or design consultancy. Available for projects in the UK, Chile, Spain, Germany, Italy, and globally. Contacto para proyectos de diseño UX y estrategia CX.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left side */}
          <div>
            <AnimateOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Let&apos;s talk
              </h1>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Whether you have a project in mind, need a design strategist, or
                just want to connect &mdash; I&apos;d love to hear from you.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="mt-10 space-y-5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{siteConfig.email}</span>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3 inline ml-1" />
                  </span>
                </a>

                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm">{siteConfig.location}</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Form */}
          <AnimateOnScroll delay={0.2}>
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
