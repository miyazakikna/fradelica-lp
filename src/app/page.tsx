import Hero from '@/components/Hero'
import Problems from '@/components/Problems'
import Features from '@/components/Features'
import Plans from '@/components/Plans'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import Campaign from '@/components/Campaign'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problems />
      <Features />
      <Plans />
      <CTA />
      <Testimonials />
      <Process />
      <Campaign />
      <FAQ />
      <Footer />
    </main>
  )
}