import Navigation from '@/components/Navigation'
import AboutSection from '@/components/AboutSection'
import WorkSection from '@/components/WorkSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </main>
  )
}
