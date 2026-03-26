import type { Metadata } from "next";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { siteConfig } from "@/data/siteConfig";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { ContactForm } from "@/components/contact/ContactForm";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.nav.contact,
    description: dict.metadata.contactDescription,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <AnimateOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                {dict.contact.title}
              </h1>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                {dict.contact.intro}
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
                    {dict.contact.linkedin}
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

          <AnimateOnScroll delay={0.2}>
            <ContactForm dict={dict} />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
