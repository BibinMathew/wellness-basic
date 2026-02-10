import { CheckCircle2 } from "lucide-react";

import { CTAButton } from "@/components/site/CTAButton";
import { Section } from "@/components/site/Section";

const highlights = [
  "Private by design",
  "Structured and practical guidance",
  "Built for students and professionals"
];

export default function Home() {
  return (
    <>
      <Section className="pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/90">Koode Wellness</p>
          <h1 className="font-[var(--font-plus-jakarta)] text-4xl font-semibold leading-tight md:text-5xl">
            Emotional wellness, made practical for everyday life.
          </h1>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            A calm, premium support experience with clear guidance for stress, focus, routines, and relationships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <CTAButton href="#start">Begin now</CTAButton>
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border/80 bg-card p-5 shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-foreground">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
