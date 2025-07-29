'use client'

import AnimatedLogo from '../AnimatedLogo'
import HeroParticles from '../HeroParticles'
import BeerMugScene from '../BeerMugScene'
import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center text-white px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 items-center">
          {/* Left Side - 3D Beer Mug (1/4) */}
          <div className="flex justify-center items-center h-[400px] md:h-[500px]">
            <div className="w-full h-full relative">
              {/* 3D Beer Mug Canvas */}
              <div className="w-full h-full">
                <BeerMugScene />
              </div>
            </div>
          </div>

          {/* Right Side - Logo and Content (3/4) */}
          <div className="md:col-span-3 flex items-center justify-center h-full">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-4xl">
              {/* Logo - Links */}
              <div className="flex justify-center items-center">
                <div className="w-48 h-48 md:w-56 md:h-56">
                  <AnimatedLogo />
                </div>
              </div>

              {/* Content - Rechts */}
              <div className="text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="block text-white mb-4">Willkommen in der</span>
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent animate-pulse font-extrabold">
                    ZappaDello Bar
                  </span>
                </h1>

                {/* Typewriter Animation */}
                <div className="text-lg md:text-xl text-gray-200 leading-relaxed font-light min-h-[2.5rem]">
                  <TypeAnimation
                    sequence={[
                      1000,
                      'Wo Einheimische und Gäste zusammenkommen.',
                      3000,
                      'Die gemütliche Bar im Herzen des Kaunertals.',
                      3000,
                      'Von ruhigen Abenden bis zu ausgelassenen Partys.',
                      3000,
                      'Handgemachte Cocktails und craft beers.',
                      3000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={50}
                    repeat={Infinity}
                    className="text-amber-300"
                  />
                </div>

                {/* Call-to-Action - Verbesserte Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-base rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transform">
                    Speisekarte ansehen
                  </button>
                  <button className="px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold text-base rounded-xl transition-all duration-300 shadow-xl shadow-amber-400/30 hover:shadow-amber-400/50 hover:scale-105 transform">
                    Reservierung
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
