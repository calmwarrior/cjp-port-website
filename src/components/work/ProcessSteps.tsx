"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import type { ProcessStep } from "@/types/project";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {steps.map((step, index) => (
        <AnimateOnScroll key={index} delay={index * 0.1}>
          <div className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Step {index + 1}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {step.description}
            </p>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
