import DiscoBallCanvas from '@/components/DiscoBallCanvas'
import HeroParticles from '@/components/HeroParticles'
import React from 'react'

export default function Page() {
  return (
    <div className="relative h-screen bg-white">
      {/* Hintergrundfarbe zur Kontrolle */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* ✨ Partikel-Hintergrund */}
        <HeroParticles />
      </div>
    </div>
  )
}
