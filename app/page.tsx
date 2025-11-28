import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LanguagesSection } from "@/components/languages-section"
import { NewEraSection } from "@/components/new-era-section"
import { FeaturesCarousel } from "@/components/features-carousel"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LanguagesSection />
      <NewEraSection />
      <FeaturesCarousel />
      <Footer />
    </main>
  )
}
