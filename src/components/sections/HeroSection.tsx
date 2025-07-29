'use client'

import AnimatedLogo from '../AnimatedLogo'
import { TypeAnimation } from 'react-type-animation'
import HeroTypewriter from '../HeroTypewriter'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex text-white px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10 w-full">
        {/* Mobile Layout: Zwei separate Bereiche */}
        <div className="flex flex-col lg:flex-row min-h-screen pb-20 lg:gap-4">
          {/* Logo Section - Oben */}
          <div className="flex justify-center lg:justify-end items-start lg:items-center pt-[25vh] lg:pt-0 lg:h-screen lg:w-1/2 mb-24 lg:mb-0">
            <div className="w-48 h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 flex items-center justify-center">
              <AnimatedLogo />
            </div>
          </div>

          {/* Content Section - Unten */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 lg:mt-0">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  <span className="block text-white mb-4">Willkommen im</span>
                  <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent animate-pulse font-extrabold">
                    ZAPPADELLO
                  </span>
                </h1>

                {/* Typewriter Animation */}
                <div className="text-sm lg:text-lg text-gray-200 leading-relaxed font-light min-h-[2.5rem]">
                  <HeroTypewriter />
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const element = document.querySelector('#events')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-400 text-black font-bold text-base rounded-xl transition-all duration-300 shadow-xl shadow-gray-300/30 hover:shadow-gray-300/50 hover:scale-105 transform"
                >
                  Events
                </button>
                <button
                  onClick={() => {
                    const element = document.querySelector('#kontakt')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="px-8 py-3 border-2 border-gray-300 text-white hover:bg-gray-300 hover:text-black font-bold text-base rounded-xl transition-all duration-300 shadow-xl shadow-gray-400/30 hover:shadow-gray-400/50 hover:scale-105 transform"
                >
                  Kontakt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
