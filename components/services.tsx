import { Camera, DoorClosed, Wifi, Thermometer } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Smart Security",
    description: "Video doorbells, outdoor and indoor security cameras, and floodlight cams.",
  },
  {
    icon: DoorClosed,
    title: "Smart Entry",
    description: "Electronic door locks, keypads, and garage door openers.",
  },
  {
    icon: Wifi,
    title: "Home Networking",
    description: "Mesh Wi-Fi system setup, signal optimization, and dead-zone elimination.",
  },
  {
    icon: Thermometer,
    title: "Smart Eco & Hubs",
    description: "Thermostats, smart lighting, and custom hub automation.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 border-t border-border/60 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Core Services</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Everything smart, professionally installed
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From a single doorbell to a whole-home setup, our verified technicians handle mounting,
            configuration, and testing so your devices just work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform group-hover:scale-105">
                <service.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
