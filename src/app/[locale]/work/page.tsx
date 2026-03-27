import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
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
    title: dict.work.title,
    description: dict.metadata.workDescription,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            {dict.work.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl">
            {dict.work.intro}
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.slug} delay={index * 0.1} className="h-full">
              <Link href={`/${locale}/work/${project.slug}`} className="group block h-full">
                <article className="h-full flex flex-col border border-border bg-surface hover:border-foreground/20 transition-colors">
                  <div
                    className="aspect-[4/3] overflow-hidden relative"
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
                  </div>

                  <div className="flex-1 flex flex-col p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 text-text-secondary">
                        {project.category}
                      </span>
                      <span className="text-xs text-text-muted">
                        {project.year}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
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
                    <div className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                      {dict.work.readCaseStudy}
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
