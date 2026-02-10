import Link from "next/link";

import { Container } from "@/components/site/Container";

const footerLinks = [
  { href: "#privacy", label: "Privacy" },
  { href: "#terms", label: "Terms" },
  { href: "#safety", label: "Safety" },
  { href: "#contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/70 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-2">
          <p className="text-base font-medium text-foreground">Koode Wellness</p>
          <p className="max-w-lg text-sm text-muted-foreground">
            Calm, guided emotional wellness support designed for students and professionals.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
