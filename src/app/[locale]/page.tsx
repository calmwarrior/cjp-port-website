import { Hero } from "@/components/home/Hero";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { ClientLogos } from "@/components/home/ClientLogos";
import { CapabilitiesStrip } from "@/components/home/CapabilitiesStrip";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <ProjectGrid dict={dict} locale={locale} />
      <ClientLogos dict={dict} />
      <CapabilitiesStrip dict={dict} />
      <AboutTeaser dict={dict} locale={locale} />
    </>
  );
}
