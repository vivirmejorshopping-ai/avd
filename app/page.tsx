import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CallToActionSection } from "@/components/call-to-action-section"
import { LocationsSection } from "@/components/locations-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <ReviewsSection />
      <CallToActionSection />
      <LocationsSection />
      <Footer />
    </main>
  )
}
