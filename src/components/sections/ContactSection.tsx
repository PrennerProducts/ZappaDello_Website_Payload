'use client'

import React from 'react'

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

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Kontakt Informationen */}
            <div className="space-y-8">
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
            </div>

            {/* Google Maps Button */}
            <div className="flex flex-col justify-center">
              <div className="bg-black/40 backdrop-blur-sm border border-gray-600/40 rounded-xl p-8 shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] md:shadow-md md:hover:shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Anfahrt</h3>
                <p className="text-gray-300 mb-8">
                  Finde uns einfach mit Google Maps und lass dich zur Zappadello Bar navigieren!
                </p>

                <button
                  onClick={handleOpenMaps}
                  className="w-full px-8 py-4 bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-400 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-xl shadow-gray-300/30 hover:shadow-gray-300/50 hover:scale-105 transform flex items-center justify-center space-x-3"
                >
                  <span className="text-2xl">🗺️</span>
                  <span>Route in Google Maps öffnen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
