import type { HTMLAttributes, ReactNode } from "react";

import { Container } from "@/components/site/Container";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
  muted?: boolean;
}

export function Section({ children, className, containerClassName, muted, ...props }: SectionProps) {
  return (
    <section className={cn("py-14 md:py-20", muted && "bg-muted/40", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
