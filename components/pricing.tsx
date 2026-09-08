import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Single Device Install",
    price: "$119",
    blurb: "Perfect for one smart upgrade.",
    features: [
      "One device mounted & configured",
      "App setup & account linking",
      "On-site testing & demo",
    ],
    featured: false,
  },
  {
    name: "Smart Entry Bundle",
    price: "$199",
    blurb: "Secure every way in.",
    features: [
      "Smart lock + video doorbell install",
      "Keypad & mobile access setup",
      "Existing wiring inspection",
      "Family member access training",
    ],
    featured: true,
  },
  {
    name: "Whole-Home Smart Setup",
    price: "$599",
    blurb: "The complete connected home.",
    features: [
      "Up to 6 devices installed",
      "Custom hub & automation scenes",
      "Whole-home coverage walkthrough",
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="packages" className="scroll-mt-16 border-t border-border/60 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Transparent Pricing</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Popular packages, upfront pricing
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            No surprises. Every package includes professional installation, testing, and a hands-on walkthrough.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-7 ${
                pkg.featured
                  ? "border-primary shadow-xl shadow-primary/10 lg:-translate-y-3"
                  : "border-border"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-semibold">{pkg.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{pkg.blurb}</p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold tracking-tight">{pkg.price}</span>
                <span className="text-sm text-muted-foreground">starting</span>
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="leading-relaxed text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                render={<a href="#booking" />}
                nativeButton={false}
                className="mt-8 w-full font-semibold"
                variant={pkg.featured ? "default" : "outline"}
              >
                Choose {pkg.name.split(" ")[0]}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
