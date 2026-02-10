import Link from "next/link";

import { Container } from "@/components/site/Container";
import { CTAButton } from "@/components/site/CTAButton";

const navItems = [
  { href: "#programs", label: "Programs" },
  { href: "#directory", label: "Directory" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          Koode <span className="text-primary">Wellness</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <CTAButton href="#start" className="hidden md:inline-flex">
          Get started
        </CTAButton>
      </Container>
    </header>
  );
}
