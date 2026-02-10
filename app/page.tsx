import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  HeartHandshake,
  Languages,
  Lock,
  MessageSquareHeart,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound
} from "lucide-react";

import { CTAButton } from "@/components/site/CTAButton";
import { Section } from "@/components/site/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    title: "Breakup support",
    description:
      "Gentle guidance to process difficult feelings, rebuild confidence, and move forward with clarity.",
    icon: HeartHandshake
  },
  {
    title: "Student stress",
    description:
      "Practical emotional wellness support for exam pressure, uncertainty, routines, and attention fatigue.",
    icon: BookOpen
  },
  {
    title: "Work stress",
    description:
      "Build steadier energy, stronger boundaries, and calmer responses to workplace demands.",
    icon: Briefcase
  },
  {
    title: "Parenting support",
    description:
      "Find balanced strategies for communication, emotional regulation, and everyday family transitions.",
    icon: UsersRound
  }
];

const steps = [
  {
    title: "Share your focus area",
    description:
      "Tell us what you are navigating right now, and we will suggest the most suitable emotional wellness path.",
    icon: MessageSquareHeart
  },
  {
    title: "Choose your counsellor",
    description:
      "Browse profiles, language preferences, and availability to find someone who matches your comfort and goals.",
    icon: UserRound
  },
  {
    title: "Build steady progress",
    description:
      "Attend sessions, follow simple practices, and track practical improvements week by week.",
    icon: Sparkles
  }
];

const testimonials = [
  {
    quote:
      "I felt heard from day one. The sessions were clear, practical, and helped me create a healthier daily rhythm.",
    author: "Anonymous, 24"
  },
  {
    quote:
      "The platform is calm and easy to use. I finally have a space to process stress without feeling judged.",
    author: "Anonymous, Working Professional"
  },
  {
    quote:
      "I learned small tools I could actually stick to. My communication and confidence improved within a few weeks.",
    author: "Anonymous, Parent"
  }
];

const faqs = [
  {
    question: "What kind of support does Koode Wellness provide?",
    answer:
      "Koode Wellness provides non-medical emotional wellness support through guided conversations, practical tools, and consistent follow-up."
  },
  {
    question: "Is my information confidential?",
    answer:
      "Yes. Privacy is built into the experience. Your session details and personal information are handled with strict confidentiality."
  },
  {
    question: "Can I choose a counsellor based on language preference?",
    answer:
      "Absolutely. You can explore profiles and choose support in English or Malayalam, based on what feels most comfortable."
  },
  {
    question: "How often should I book sessions?",
    answer:
      "Most people begin with weekly sessions and adjust over time. Your counsellor can help you choose a pace that fits your goals."
  },
  {
    question: "Is Koode Wellness suitable for students and working professionals?",
    answer:
      "Yes. Our support model is designed for real-world schedules, with flexible booking and practical outcomes for daily life."
  }
];

export default function Home() {
  return (
    <>
      <Section className="relative overflow-hidden pt-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,theme(colors.primary/15),transparent_45%)]" />
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <Badge className="mx-auto w-fit" variant="secondary">
            Emotional wellness support for everyday life
          </Badge>
          <h1 className="font-[var(--font-plus-jakarta)] text-4xl font-semibold leading-tight md:text-6xl">
            Feel more grounded with structured, human support.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            Koode Wellness helps you navigate stress, relationships, and life transitions with calm guidance,
            practical sessions, and meaningful progress you can feel.
          </p>
          <div id="book" className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <CTAButton href="#book">Book a session</CTAButton>
            <CTAButton href="#directory" variant="outline">
              Explore counsellors
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section className="py-8">
        <Card className="rounded-2xl border-primary/15 bg-primary/5">
          <CardContent className="grid gap-5 p-5 md:grid-cols-3 md:p-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
              <p className="text-sm font-medium">Non-medical support model</p>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="size-5 text-primary" aria-hidden="true" />
              <p className="text-sm font-medium">Confidential by design</p>
            </div>
            <div className="flex items-center gap-3">
              <Languages className="size-5 text-primary" aria-hidden="true" />
              <p className="text-sm font-medium">English + മലയാളം guidance</p>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section id="directory" muted>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <Badge variant="outline">Support categories</Badge>
            <h2 className="font-[var(--font-plus-jakarta)] text-3xl font-semibold md:text-4xl">
              Choose the area where you want support right now
            </h2>
            <p className="text-muted-foreground">
              Every category is designed to offer practical emotional wellness support with clear outcomes.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <Card key={category.title} className="rounded-2xl transition-transform duration-200 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <category.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription className="text-sm leading-7">{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="how-it-works">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <Badge variant="outline">How it works</Badge>
            <h2 className="font-[var(--font-plus-jakarta)] text-3xl font-semibold md:text-4xl">
              Simple process, consistent support
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="rounded-2xl border-border/80">
                <CardHeader>
                  <p className="mb-3 text-sm font-semibold text-primary">Step {index + 1}</p>
                  <CardTitle className="flex items-center gap-2">
                    <step.icon className="size-5 text-primary" aria-hidden="true" />
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <Badge variant="outline">What people say</Badge>
            <h2 className="font-[var(--font-plus-jakarta)] text-3xl font-semibold md:text-4xl">
              Trusted by people across study, work, and family life
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.author} className="rounded-2xl bg-card">
                <CardContent className="space-y-4 p-6">
                  <BadgeCheck className="size-5 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-7 text-foreground">“{item.quote}”</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="faq">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-3">
            <Badge variant="outline">FAQ</Badge>
            <h2 className="font-[var(--font-plus-jakarta)] text-3xl font-semibold md:text-4xl">
              Questions before you begin
            </h2>
            <p className="text-muted-foreground">Clear answers to help you start with confidence.</p>
          </div>
          <Card className="rounded-2xl px-6">
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </Section>

      <Section>
        <Card className="rounded-3xl border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <CardContent className="flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">Start with one small step</p>
              <h2 className="font-[var(--font-plus-jakarta)] text-3xl font-semibold leading-tight md:text-4xl">
                Your emotional wellness support journey can begin today.
              </h2>
              <p className="text-muted-foreground">
                Book your first session and build a calmer, clearer week with structured guidance.
              </p>
            </div>
            <CTAButton href="#book" className="w-full md:w-auto">
              Book a session
            </CTAButton>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
