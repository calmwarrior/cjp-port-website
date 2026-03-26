import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getNextProject } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { ResultMetrics } from "@/components/work/ResultMetrics";
import { ProcessSteps } from "@/components/work/ProcessSteps";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.challenge.slice(0, 160),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return (
    <article className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back link */}
        <AnimateOnScroll>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>
        </AnimateOnScroll>

        {/* Header */}
        <AnimateOnScroll>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 text-text-secondary">
                {project.category}
              </span>
              <span className="text-xs text-text-muted">{project.year}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>
        </AnimateOnScroll>

        {/* Meta */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                Client
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {project.client}
              </p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                Role
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {project.role}
              </p>
            </div>
            {project.agency && (
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                  Agency
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {project.agency}
                </p>
              </div>
            )}
            {project.duration && (
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
                  Duration
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {project.duration}
                </p>
              </div>
            )}
          </div>
        </AnimateOnScroll>

        {/* Cover image */}
        <AnimateOnScroll delay={0.2}>
          <div
            className="mt-12 aspect-[21/9] overflow-hidden relative"
            style={{ backgroundColor: project.coverColor + "12" }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </AnimateOnScroll>

        {/* Challenge */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          <AnimateOnScroll>
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
              The Challenge
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              {project.challenge}
            </p>
          </AnimateOnScroll>
        </div>

        {/* Process */}
        <div className="mt-16 md:mt-24">
          <AnimateOnScroll>
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-10">
              The Process
            </h2>
          </AnimateOnScroll>
          <ProcessSteps steps={project.process} />
        </div>

        {/* Result */}
        <div className="mt-16 md:mt-24">
          <AnimateOnScroll>
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
              The Outcome
            </h2>
          </AnimateOnScroll>
          <div className="max-w-3xl">
            <AnimateOnScroll delay={0.1}>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {project.result}
              </p>
            </AnimateOnScroll>
          </div>
          {project.resultMetrics && project.resultMetrics.length > 0 && (
            <ResultMetrics metrics={project.resultMetrics} />
          )}
        </div>

        {/* Tools */}
        {project.tools && (
          <div className="mt-16">
            <AnimateOnScroll>
              <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
                Tools & Methods
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-sm rounded-full border border-border text-text-secondary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        )}

        {/* Next project */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-border">
          <AnimateOnScroll>
            <p className="text-sm text-text-muted mb-3">Next project</p>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group inline-flex items-center gap-3"
            >
              <span className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                {nextProject.title}
              </span>
              <ArrowRight className="w-6 h-6 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </article>
  );
}
