"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import type { ResultMetric } from "@/types/project";

interface ResultMetricsProps {
  metrics: ResultMetric[];
}

export function ResultMetrics({ metrics }: ResultMetricsProps) {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <AnimateOnScroll key={index} delay={index * 0.1}>
          <div className="p-6 rounded-xl bg-neutral-100 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-text-secondary">{metric.label}</p>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
