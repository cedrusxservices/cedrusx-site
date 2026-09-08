import { Hexagon, ShieldCheck, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "Book Installation", href: "#booking" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Hexagon className="size-5" strokeWidth={2.5} />
                <span className="absolute size-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-heading text-lg font-bold tracking-tight">
                Cedrus<span className="text-primary">X</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional smart home &amp; tech installation for homeowners across the Fort Worth metro.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
              <ShieldCheck className="size-4" />
              100% Satisfaction Guaranteed
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+18176597021" className="flex items-center gap-2 transition-colors hover:text-foreground">
                  <Phone className="size-4 text-primary" />
                  (817) 659-7021
                </a>
              </li>
              <li>
                <a
                  href="mailto:cedrusx.services@cedrusx.com"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-primary" />
                  cedrusx.services@cedrusx.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                Fort Worth Metro, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} CedrusX. All rights reserved.</p>
          <p>Verified technicians &bull; Upfront pricing &bull; Satisfaction guaranteed</p>
        </div>
      </div>
    </footer>
  )
}
