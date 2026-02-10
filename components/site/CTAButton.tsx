import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function CTAButton({ href, children, className }: CTAButtonProps) {
  return (
    <Button asChild size="lg" className={className}>
      <Link href={href}>
        {children}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </Button>
  );
}
