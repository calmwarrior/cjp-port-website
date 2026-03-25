"use client";

import { experiences } from "@/data/experience";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <AnimateOnScroll key={index} delay={index * 0.1}>
            <div className="relative pl-8 md:pl-20">
              {/* Dot */}
              <div
                className={cn(
                  "absolute left-0 md:left-8 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full border-2",
                  exp.endYear === undefined
                    ? "bg-primary border-primary"
                    : "bg-background border-border"
                )}
              />

              {/* Year badge */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold text-text-muted">
                  {exp.startYear}
                  {exp.endYear ? ` \u2013 ${exp.endYear}` : " \u2013 Present"}
                </span>
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    exp.type === "full-time" &&
                      "bg-neutral-100 text-text-secondary",
                    exp.type === "freelance" &&
                      "bg-primary/10 text-primary",
                    exp.type === "teaching" &&
                      "bg-blue-50 text-blue-600",
                    exp.type === "education" &&
                      "bg-green-50 text-green-600"
                  )}
                >
                  {exp.type === "full-time"
                    ? "Full-time"
                    : exp.type === "freelance"
                      ? "Freelance"
                      : exp.type === "teaching"
                        ? "Teaching"
                        : "Education"}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {exp.role}
              </h3>
              <p className="text-sm text-text-muted">
                {exp.company} &middot; {exp.location}
              </p>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {exp.description}
              </p>

              {exp.highlights && (
                <ul className="mt-3 space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-border"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
