// src/app/(site)/page.tsx
import { getPayload } from 'payload'
import config from '@/payload.config'
import GallerySection from '@/components/sections/GallerySection'
import HeroSection from '@/components/sections/HeroSection'
import EventsSection from '@/components/sections/EventsSection'
import HeroParticles from '@/components/HeroParticles'
import DiscoBallScene from '@/components/DiscoBallScene'

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
    sort: 'date',
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
      {/* Fixed Background with Neon Lights and Particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* HeroParticles Background */}
        <div className="absolute inset-0">
          <HeroParticles />
        </div>

        {/* Neon Background Effects - Fixed */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-60 left-1/4 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-40 right-1/3 w-88 h-88 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-750"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-yellow-500/15 rounded-full blur-3xl animate-pulse delay-1250"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1750"></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Gallery Section */}
        <GallerySection images={images} />

        {/* About Section */}
        <section className="py-20 px-6 relative z-10">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Über uns
            </h2>

            <div className="max-w-7xl mx-auto">
              {/* Discoball - Banner Format */}
              <div className="flex justify-center mb-12">
                <div className="w-screen h-[200px] md:h-[250px] relative -mx-6">
                  <DiscoBallScene />
                </div>
              </div>

              {/* Content - Darunter */}
              <div className="text-center max-w-5xl mx-auto space-y-8">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Die ZappaDello Bar
                </h3>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Mehr als nur eine Bar - die ZappaDello ist ein Treffpunkt für Einheimische und
                    Gäste im Herzen des Kaunertals. Hier verbinden sich Tradition mit Moderne, und
                    jeder Abend wird zu einem besonderen Erlebnis.
                  </p>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    Von ruhigen Abenden bis zu ausgelassenen Partys ist bei uns alles dabei. Genieße
                    unsere handgemachten Cocktails, craft beers und japanische Getränke in
                    authentischer Atmosphäre.
                  </p>
                </div>

                {/* Features - Moderner Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="flex flex-col items-center space-y-3 p-6 bg-black/20 backdrop-blur-sm border border-amber-500/20 rounded-xl hover:border-amber-400/60 transition-all duration-300">
                    <span className="text-4xl">🍸</span>
                    <span className="text-amber-300 font-semibold text-center">
                      Handgemachte Cocktails
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-6 bg-black/20 backdrop-blur-sm border border-amber-500/20 rounded-xl hover:border-amber-400/60 transition-all duration-300">
                    <span className="text-4xl">🍺</span>
                    <span className="text-amber-300 font-semibold text-center">Craft Beers</span>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-6 bg-black/20 backdrop-blur-sm border border-amber-500/20 rounded-xl hover:border-amber-400/60 transition-all duration-300">
                    <span className="text-4xl">🎵</span>
                    <span className="text-amber-300 font-semibold text-center">Live Musik</span>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-6 bg-black/20 backdrop-blur-sm border border-amber-500/20 rounded-xl hover:border-amber-400/60 transition-all duration-300">
                    <span className="text-4xl">🎉</span>
                    <span className="text-amber-300 font-semibold text-center">
                      Regelmäßige Events
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <EventsSection events={eventsData} />

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Kontakt
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-xl text-gray-300">Besuche uns im Herzen des Kaunertals</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/50">
                  Reservierung
                </button>
                <button className="px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/50">
                  Anfahrt
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
