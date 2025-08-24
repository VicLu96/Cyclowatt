import { I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StrengthsSection } from "@/components/strengths-section"
import { VideoSection } from "@/components/video-section"
import { AnnouncementSection } from "@/components/announcement-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <StrengthsSection />
          <VideoSection />
          <AnnouncementSection />
          <FeaturesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}

export default App
