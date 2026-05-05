import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TrustStrip } from '@/components/TrustStrip'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <div className="atmosphere" />
      <div className="grid-overlay" />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
