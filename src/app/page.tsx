import { Hero } from "@/components/home/Hero";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { ClientLogos } from "@/components/home/ClientLogos";
import { CapabilitiesStrip } from "@/components/home/CapabilitiesStrip";
import { AboutTeaser } from "@/components/home/AboutTeaser";

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
