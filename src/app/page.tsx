import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { ClientLogos } from "@/components/home/ClientLogos";
import { CapabilitiesStrip } from "@/components/home/CapabilitiesStrip";
import { AboutTeaser } from "@/components/home/AboutTeaser";

export const metadata: Metadata = {
  title: "Carolina Jofre Pfeil - Senior UX Designer & CX Strategist | London, UK",
  description:
    "Portfolio of Carolina Jofre Pfeil — Senior UX Designer and CX Strategist with 15+ years of experience. Chilean-German designer based in London working with global brands like LEGO, Samsung, Barclays, and J&J. Bilingual English/Spanish. Diseñadora UX Senior y Estratega CX con más de 15 años de experiencia.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <ClientLogos />
      <CapabilitiesStrip />
      <AboutTeaser />
    </>
  );
}
