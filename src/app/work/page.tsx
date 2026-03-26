import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies showcasing UX design, CX strategy, and brand experience work for global brands including LEGO, J&J, and more.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Selected Work
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl">
            A curated selection of projects where I helped organisations solve
            business problems through design. Each case study goes deep on
            context, decisions, and outcomes.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.slug} delay={index * 0.1}>
              <Link href={`/work/${project.slug}`} className="group block">
                <article className="border border-border bg-surface hover:border-primary/30 transition-colors">
                  {/* Image area */}
                  <div
                    className="aspect-[3/1] overflow-hidden relative"
                    style={{ backgroundColor: project.coverColor + "15" }}
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 text-text-secondary">
                        {project.category}
                      </span>
                      <span className="text-xs text-text-muted">
                        {project.year}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm text-text-muted">
                      {project.client}
                      {project.agency && ` via ${project.agency}`} &middot;{" "}
                      {project.role}
                    </p>
                    <p className="mt-3 text-sm text-text-secondary line-clamp-2">
                      {project.challenge.slice(0, 160)}...
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Read case study
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
