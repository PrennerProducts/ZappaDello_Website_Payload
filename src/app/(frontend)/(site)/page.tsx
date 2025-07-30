// src/app/(site)/page.tsx
import { getPayload } from 'payload'
import config from '@/payload.config'
import GallerySection from '@/components/sections/GallerySection'
import HeroSection from '@/components/sections/HeroSection'
import EventsSection from '@/components/sections/EventsSection'
import ContactSection from '@/components/sections/ContactSection'
import AboutSection from '@/components/sections/AboutSection'
import HeroParticles from '@/components/HeroParticles'
import DiscoBallScene from '@/components/DiscoBallScene'
import BurgerMenu from '@/components/BurgerMenu'

export const dynamic = 'force-dynamic'

// Hilfsfunktion um Text aus Rich-Text zu extrahieren
function extractTextFromRichText(richText: any): string | undefined {
  if (!richText?.root?.children) return undefined

  let text = ''
  for (const child of richText.root.children) {
    if (child.children) {
      for (const grandChild of child.children) {
        if (grandChild.text) {
          text += grandChild.text + ' '
        }
      }
    }
  }
  return text.trim() || undefined
}

export default async function HomePage() {
  const payload = await getPayload({ config })

  const galleryItems = await payload.find({
    collection: 'gallery',
    sort: '-createdAt',
    limit: 12,
  })

  const events = await payload.find({
    collection: 'events',
    sort: '-date',
    limit: 20,
  })

  const images = galleryItems.docs.map((item) => ({
    id: item.id.toString(),
    url:
      item.image && typeof item.image === 'object' && 'url' in item.image
        ? item.image.url || ''
        : '',
    caption: item.caption ?? undefined,
  }))

  const eventsData = events.docs.map((event) => ({
    id: event.id.toString(),
    title: event.title,
    date: event.date,
    location: event.location || undefined,
    image:
      event.image && typeof event.image === 'object' && 'url' in event.image
        ? {
            url: event.image.url || '',
            alt: event.image.alt || event.title,
          }
        : undefined,
    description: extractTextFromRichText(event.description),
  }))

  return (
    <div className="relative min-h-screen overflow-y-auto bg-black">
      <BurgerMenu />
      {/* Fixed Background with Neon Lights and Particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* HeroParticles Background */}
        <div className="absolute inset-0">{/* <HeroParticles /> */}</div>

        {/* Neon Background Effects - Fixed */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse duration-3000"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500/25 rounded-full blur-3xl animate-pulse delay-1000 duration-3000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-500 duration-3000"></div>
          <div className="absolute top-60 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1500 duration-3000"></div>
          <div className="absolute bottom-40 right-1/3 w-88 h-88 bg-fuchsia-500/25 rounded-full blur-3xl animate-pulse delay-750 duration-3000"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl animate-pulse delay-2000 duration-3000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1250 duration-3000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1750 duration-3000"></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <GallerySection images={images} />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Events Section */}
        <section id="events">
          <EventsSection events={eventsData} />
        </section>

        {/* Contact Section */}
        <section id="kontakt">
          <ContactSection />
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} Zappadello</p>
              <p className="mt-2">
                <a
                  href="/impressum"
                  className="hover:text-amber-300 transition-colors duration-300"
                >
                  Impressum
                </a>
                {' · '}
                <a
                  href="/datenschutz"
                  className="hover:text-amber-300 transition-colors duration-300"
                >
                  Datenschutz
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
