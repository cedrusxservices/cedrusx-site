import { MousePointerClick, CalendarCheck, Wrench } from "lucide-react"

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose your service",
    description: "Pick the service or package that fits your home, right here online.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule a time",
    description: "Book a convenient appointment window that works around your day.",
  },
  {
    icon: Wrench,
    title: "We install & train",
    description: "We install, test everything, and walk you through using your devices.",
  },
]

export function HowItWorks() {
  return (
    <section id="why-us" className="scroll-mt-16 border-t border-border/60 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">How It Works</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Three simple steps
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-7"
            >
              <span className="font-heading text-sm font-bold text-primary">
                Step {index + 1}
              </span>
              <span className="mt-4 flex size-12 items-center justify-center rounded-xl bg-secondary text-foreground">
                <step.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
