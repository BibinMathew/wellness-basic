import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

export function CTAButton({ href, children, className, variant = "default", size = "lg" }: CTAButtonProps) {
  return (
    <Button asChild size={size} variant={variant} className={className}>
      <Link href={href}>
        {children}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </Button>
  );
}
