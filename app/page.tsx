import { Hero } from "@/components/hero"
import { AboutTherapy } from "@/components/about-therapy"
import { Testimonials } from "@/components/testimonials"
import { Facilities } from "@/components/facilities"
import { BlogPreview } from "@/components/blog-preview"
import { SocialMedia } from "@/components/social-media"
import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutTherapy />
      <Testimonials />
      <Facilities />
      <BlogPreview />
      <SocialMedia />
      <ContactForm />
      <LocationMap />
    </main>
  )
}
