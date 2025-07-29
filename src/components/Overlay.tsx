'use client'

import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Overlay() {
  const scroll = useScroll()
  const overlayRef = useRef<HTMLDivElement>(null)

  useFrame(() => {
    if (!overlayRef.current) return

    const offset = scroll.offset // 0 bis 1

    // Fade-out Effekt beim Scrollen
    const opacity = 1 - offset * 0.8
    overlayRef.current.style.opacity = opacity.toString()

    // Sanfte Bewegung nach oben beim Scrollen
    const translateY = offset * -50
    overlayRef.current.style.transform = `translateY(${translateY}px)`
  })

  return (
    <div
      ref={overlayRef}
      className="w-full h-screen flex flex-col justify-center items-center text-white pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(139,69,19,0.5) 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Logo/Brand */}
      <div className="mb-8">
        <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          ZappaDello
        </div>
        <div className="text-xl text-amber-200 text-center">Premium Cocktails & Craft Beer</div>
      </div>

      {/* Willkommensnachricht */}
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Willkommen im
          <span className="block text-amber-400">ZAPPADELLO</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          Entdecke unsere handgemachten Cocktails, craft beers und die beste Atmosphäre in der
          Stadt. Scroll nach unten für mehr!
        </p>

        {/* Call-to-Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors duration-300 pointer-events-auto">
            Speisekarte ansehen
          </button>
          <button className="px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold rounded-lg transition-colors duration-300 pointer-events-auto">
            Reservierung
          </button>
        </div>
      </div>

      {/* Scroll-Indikator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-amber-400 text-sm mt-2">Scroll</p>
      </div>
    </div>
  )
}
