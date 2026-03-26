import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    // English terms
    "UX Designer",
    "CX Strategist",
    "Senior Product Designer",
    "User Experience",
    "Customer Experience",
    "Design Systems",
    "Financial Services UX",
    "Service Design",
    "Product Design Portfolio",
    "Carolina Jofre",
    "Carolina Jofre Pfeil",
    // Location terms
    "London",
    "UK",
    "United Kingdom",
    "Chile",
    "Santiago",
    "Spain",
    "Germany",
    "Italy",
    // Spanish terms (for Chile/Spain search)
    "Diseñadora UX",
    "Diseño de Experiencia de Usuario",
    "Estrategia CX",
    "Diseño de Servicios",
    "Consultora de Diseño",
    "Portafolio UX",
    // German terms
    "UX Designerin",
    "Produktdesignerin",
    // Italian terms
    "Designer UX",
    // Employer-focused terms
    "UX Designer for hire",
    "Freelance UX Consultant",
    "Senior UX Designer London",
    "Bilingual UX Designer",
    "UX Designer LEGO Samsung Barclays",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    alternateLocale: ["es_CL", "es_ES", "de_DE", "it_IT"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en": siteConfig.url,
      "es": siteConfig.url,
      "de": siteConfig.url,
      "it": siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
};

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
    "User Experience Design",
    "Customer Experience Strategy",
    "Service Design",
    "Design Systems",
    "Product Design",
    "Financial Services UX",
    "Brand Experience",
    "User Research",
    "Usability Testing",
    "Workshop Facilitation",
    "Figma",
    "Accessibility (WCAG)",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Pontificia Universidad Católica de Chile",
      address: { "@type": "PostalAddress", addressCountry: "CL" },
    },
    {
      "@type": "EducationalOrganization",
      name: "Universidad Diego Portales",
      address: { "@type": "PostalAddress", addressCountry: "CL" },
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Konrad Group",
    url: "https://www.konrad.com",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
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
        {/* Built by calmwarrior */}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
