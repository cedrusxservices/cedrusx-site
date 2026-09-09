"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  "Doorbell / Camera",
  "Smart Lock",
  "Mesh Wi-Fi",
  "Full System",
  "Other",
]

const fieldClasses =
  "w-full rounded-lg border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

 function handleSubmit(event: any) {
    event.preventDefault()
    const formData = new FormData(event.target)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error(error))
  }
  return (
    <section id="booking" className="scroll-mt-16 border-t border-border/60 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Free Consultation</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Book your installation
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Tell us what you need and we&apos;ll reach out to confirm your appointment. No obligation,
            no pressure &mdash; just upfront pricing and a plan that fits your home.
          </p>
          <a
            href="tel:+18176597021"
            className="mt-6 inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/50"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <PhoneCall className="size-4" />
            </span>
            Prefer to call? (817) 659-7021
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="size-12 text-primary" />
              <h3 className="mt-4 font-heading text-xl font-semibold">Request received!</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thanks for reaching out to CedrusX. A member of our team will contact you shortly to
                confirm your free consultation.
              </p>
              <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                Submit another request
              </Button>
            </div>
          ) : (
            <form name="quote-request" method="POST" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="hidden" name="form-name" value="quote-request" />
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input id="name" name="name" required placeholder="Jordan Rivera" className={fieldClasses} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(817) 555-0199"
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service Needed
                </label>
                <select id="service" name="service" required defaultValue="" className={fieldClasses}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Preferred Date
                  </label>
                  <input id="date" name="date" type="date" className={fieldClasses} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="text-sm font-medium">
                    Preferred Time
                  </label>
                  <input id="time" name="time" type="time" className={fieldClasses} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Short Message / Property Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Two-story home, existing wiring for a doorbell, weak Wi-Fi upstairs..."
                  className={`${fieldClasses} resize-none`}
                />
              </div>

              <Button type="submit" size="lg" className="mt-1 w-full font-semibold">
                Submit Request for Free Consultation
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
