"use client"

import { useState } from "react"
import { MapPin, Plus, Minus, Clock } from "lucide-react"

const areas = [
  "Fort Worth",
  "Arlington",
  "Keller",
  "Southlake",
  "Grapevine",
  "Mansfield",
  "Bedford",
  "North Richland Hills",
]

const faqs = [
  {
    question: "Do I need to buy the devices beforehand?",
    answer:
      "It's up to you. You can purchase your own devices and we'll install them, we can recommend and supply compatible hardware that fits your budget. We also supply devices if needed. We'll confirm everything during your free consultation.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A single device typically takes 30–60 minutes. Bundles and whole-home setups usually take 2–4 hours depending on the number of devices and your existing wiring and network.",
  },
  {
    question: "What if my Wi-Fi signal is weak?",
    answer:
      "That's exactly what our Home Networking service solves. We assess coverage, install a mesh Wi-Fi system, and optimize placement to eliminate dead zones so every smart device stays reliably connected.",
  },
]

export function ServiceAreaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="service-area" className="scroll-mt-16 border-t border-border/60 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Service Area</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Fast, local service across the Fort Worth metro
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We&apos;re a local team, which means quicker scheduling and faster response times. Same-day
            and next-day appointments are often available.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium">
            <Clock className="size-4 text-primary" />
            Same-day appointments often available
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
            {areas.map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-primary" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Common questions
          </h2>

          <div className="mt-8 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={faq.question} className="rounded-xl border border-border bg-card">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
