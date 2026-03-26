"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

interface ProjectGridProps {
  dict: any;
  locale: string;
}

export function ProjectGrid({ dict, locale }: ProjectGridProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-12">
            {dict.home.selectedWork}
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.slug} delay={index * 0.1}>
              <Link href={`/${locale}/work/${project.slug}`} className="group block">
                <motion.article
                  className="relative overflow-hidden border border-border bg-surface"
                >
                  {/* Cover image area */}
                  <div
                    className="aspect-[4/3] relative overflow-hidden"
                    style={{ backgroundColor: project.coverColor + "15" }}
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className={project.coverFit === "contain" ? "object-contain" : "object-cover"}
                      style={{ objectPosition: project.coverPosition || "center" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-text-secondary">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground leading-snug">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm text-text-muted">
                          {project.client}
                          {project.agency && ` via ${project.agency}`} &middot;{" "}
                          {project.year}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-text-muted flex-shrink-0 mt-1" />
                    </div>
                    <p className="mt-3 text-sm text-text-secondary line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </motion.article>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
