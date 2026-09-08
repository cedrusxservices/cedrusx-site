import Image from "next/image"
import { BadgeCheck, ShieldCheck, Tags } from "lucide-react"
import { Button } from "@/components/ui/button"

const badges = [
  { icon: BadgeCheck, label: "Verified Technicians" },
  { icon: Tags, label: "Upfront Pricing" },
  { icon: ShieldCheck, label: "100% Satisfaction Guaranteed" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Now serving the Fort Worth metro
          </span>
          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Smart Home Setup, <span className="text-primary">Made Simple.</span>
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Professional installation for doorbells, cameras, smart locks, smart thermostats, and high-speed mesh Wi-Fi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#booking" />}
              nativeButton={false}
              size="lg"
              className="font-semibold"
            >
              Book Your Install
            </Button>
            <Button
              render={<a href="#services" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="font-semibold"
            >
              View Services
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((badge) => (
              <li key={badge.label} className="flex items-center gap-2 text-sm font-medium">
                <badge.icon className="size-4 text-primary" />
                {badge.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-3 rounded-3xl bg-accent/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/40">
            <Image
              src="/hero-install.png"
              alt="A CedrusX technician installing a smart video doorbell on a home's front door"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-border/60 bg-background/85 px-4 py-3 backdrop-blur">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <ShieldCheck className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Installed &amp; Tested</p>
                <p className="text-xs text-muted-foreground">Same-day appointments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
