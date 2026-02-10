import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/site/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  muted?: boolean;
}

export function Section({ children, className, containerClassName, muted }: SectionProps) {
  return (
    <section className={cn("py-14 md:py-20", muted && "bg-muted/40", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
