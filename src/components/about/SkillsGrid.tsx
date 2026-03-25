"use client";

import { skills } from "@/data/experience";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((category, index) => (
        <AnimateOnScroll key={category.category} delay={index * 0.1}>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item} className="text-sm text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
