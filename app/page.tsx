import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { HowItWorks } from "@/components/how-it-works"
import { BookingForm } from "@/components/booking-form"
import { ServiceAreaFaq } from "@/components/service-area-faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <HowItWorks />
        <BookingForm />
        <ServiceAreaFaq />
      </main>
      <SiteFooter />
    </div>
  )
}
