'use client'

import React from 'react'
import { MapPin } from 'lucide-react'

function ContactSection() {
  const handleOpenMaps = () => {
    const address = encodeURIComponent('Zappadello Feichten 102, 6524 Kaunertal, Austria')
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`
    window.open(mapsUrl, '_blank')
  }

  return (
    <section className="py-20 px-6 relative z-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
          Kontakt
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Kontakt Informationen */}
            <div className="bg-black/40 backdrop-blur-sm border border-gray-600/40 rounded-xl p-8 shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] md:shadow-md md:hover:shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Kontaktdaten</h3>

              <div className="space-y-6">
                {/* Telefon */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-black text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Telefon</p>
                    <a
                      href="tel:06505174355"
                      className="text-white font-semibold text-lg hover:text-amber-300 transition-colors duration-300"
                    >
                      0650 517 43 55
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-black text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a
                      href="mailto:zappadello@gmail.com"
                      className="text-white font-semibold text-lg hover:text-amber-300 transition-colors duration-300"
                    >
                      zappadello@gmail.com
                    </a>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-black text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Adresse</p>
                    <p className="text-white font-semibold text-lg">
                      Feichten 102
                      <br />
                      6524 Kaunertal, Austria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div className="bg-black/40 backdrop-blur-sm border border-gray-600/40 rounded-xl p-8 shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] md:shadow-md md:hover:shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Öffnungszeiten</h3>

              <div className="space-y-4">
                {/* Reguläre Zeiten */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-black text-xl">🕐</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Di - So</p>
                    <p className="text-white font-semibold text-lg">20:00 - 02:00 Uhr</p>
                  </div>
                </div>

                {/* Terrasse */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-black text-xl">☀️</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Terrasse</p>
                    <p className="text-white font-semibold text-lg">Ab 16:00 Uhr</p>
                    <p className="text-gray-400 text-sm">Bei schönem Wetter</p>
                  </div>
                </div>

                {/* Montag */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🚫</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Montag</p>
                    <p className="text-gray-400 font-semibold text-lg">Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="bg-black/40 backdrop-blur-sm border border-gray-600/40 rounded-xl p-8 shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] md:shadow-md md:hover:shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Anfahrt</h3>
              <p className="text-gray-300 mb-8">
                Finde uns einfach mit Google Maps und lass dich zur Zappadello Bar navigieren!
              </p>

              <button
                onClick={handleOpenMaps}
                className="w-full px-8 py-4 bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-400 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-xl shadow-gray-300/30 hover:shadow-gray-300/50 hover:scale-105 transform flex items-center justify-center space-x-3"
              >
                <div className="relative">
                  {/* Google Maps Icon mit Map-Hintergrund */}
                  <div className="relative w-10 h-10">
                    {/* Map Hintergrund */}
                    <div className="absolute inset-0 bg-blue-400 rounded-lg overflow-hidden">
                      {/* Map Grid Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="w-full h-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500">
                          {/* Horizontale Linien */}
                          <div className="absolute top-1/4 left-0 right-0 h-px bg-white/20"></div>
                          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20"></div>
                          <div className="absolute top-3/4 left-0 right-0 h-px bg-white/20"></div>
                          {/* Vertikale Linien */}
                          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/20"></div>
                          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20"></div>
                          <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white/20"></div>
                        </div>
                      </div>

                      {/* Straßen */}
                      <div className="absolute top-1/3 left-0 right-0 h-1 bg-white/40 rounded-full"></div>
                      <div className="absolute top-2/3 left-0 right-0 h-1 bg-white/40 rounded-full"></div>
                      <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-white/40 rounded-full"></div>
                      <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-white/40 rounded-full"></div>
                    </div>

                    {/* Pin Shadow */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black/30 rounded-full animate-pulse"></div>

                    {/* Main Pin */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>

                    {/* Pin Point */}
                    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-red-500"></div>

                    {/* Pulse Ring */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 border border-red-500 rounded-full animate-ping opacity-75"></div>

                    {/* Google Maps Logo */}
                    <div className="absolute bottom-1 right-1 text-[6px] font-bold text-white bg-black/50 px-1 py-0.5 rounded">
                      G
                    </div>
                  </div>
                </div>
                <span>Route in Google Maps öffnen</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
