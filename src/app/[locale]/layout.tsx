import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";
import { getDictionary } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/i18n";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const localeToOg: Record<string, string> = {
  en: "en_GB",
  es: "es_CL",
  de: "de_DE",
  it: "it_IT",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.metadata.description,
    keywords: [
      "UX Designer", "CX Strategist", "Senior Product Designer",
      "User Experience", "Customer Experience", "Design Systems",
      "Financial Services UX", "Service Design", "Product Design Portfolio",
      "Carolina Jofre", "Carolina Jofre Pfeil",
      "London", "UK", "United Kingdom", "Chile", "Santiago", "Spain", "Germany", "Italy",
      "Diseñadora UX", "Estrategia CX", "Portafolio UX",
      "UX Designerin", "Produktdesignerin", "Designer UX",
      "UX Designer for hire", "Freelance UX Consultant",
      "Senior UX Designer London", "Bilingual UX Designer",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      locale: localeToOg[locale] || "en_GB",
      alternateLocale: Object.values(localeToOg).filter((l) => l !== localeToOg[locale]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true, follow: true,
        "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        en: `${siteConfig.url}/en`,
        es: `${siteConfig.url}/es`,
        de: `${siteConfig.url}/de`,
        it: `${siteConfig.url}/it`,
        "x-default": `${siteConfig.url}/en`,
      },
    },
  };
}

// JSON-LD structured data for Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Senior UX Designer & CX Strategist",
  alternateName: ["Carolina Jofré Pfeil", "Carolina Jofre"],
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: [siteConfig.linkedin],
  nationality: [
    { "@type": "Country", name: "Chile" },
    { "@type": "Country", name: "Germany" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  workLocation: [
    {
      "@type": "Place",
      name: "London, United Kingdom",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
  ],
  knowsLanguage: [
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Spanish", alternateName: "es" },
    { "@type": "Language", name: "German", alternateName: "de" },
    { "@type": "Language", name: "Italian", alternateName: "it" },
  ],
  knowsAbout: [
    "User Experience Design", "Customer Experience Strategy", "Service Design",
    "Design Systems", "Product Design", "Financial Services UX", "Brand Experience",
    "User Research", "Usability Testing", "Workshop Facilitation", "Figma", "Accessibility (WCAG)",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Pontificia Universidad Católica de Chile", address: { "@type": "PostalAddress", addressCountry: "CL" } },
    { "@type": "EducationalOrganization", name: "Universidad Diego Portales", address: { "@type": "PostalAddress", addressCountry: "CL" } },
  ],
  worksFor: { "@type": "Organization", name: "Konrad Group", url: "https://www.konrad.com" },
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior UX Designer",
    occupationLocation: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Chile" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Italy" },
    ],
    skills: "UX Design, CX Strategy, Service Design, Design Systems, User Research, Figma, WCAG Accessibility",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${plusJakarta.variable} h-full antialiased`}>
      <head>
        <meta name="designer" content="calmwarrior" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <meta name="language" content="English, Spanish, German, Italian" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="global" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
