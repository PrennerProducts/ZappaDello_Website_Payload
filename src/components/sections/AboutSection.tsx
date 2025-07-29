import React from 'react'
import DiscoBallScene from '../DiscoBallScene'

export default function AboutSection() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
          Über uns
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* Discoball - Banner Format */}
          <div className="flex justify-center mb-12">
            <div className="w-screen h-[200px] md:h-[550px] relative -mx-6">
              <DiscoBallScene />
              {/* Interactive Icon */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2 border border-gray-600/40">
                <div className="flex items-center space-x-2 text-white text-xs">
                  <span className="text-lg">🖱️</span>
                  <span className="hidden sm:inline">Ziehen zum Drehen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Darunter */}
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Die Bar</h3>

            <div className="grid md:grid-cols-2 gap-8 text-left bg-black/20 backdrop-blur rounded-2xl p-8">
              <p className="text-xl text-gray-200 leading-relaxed">
                Das Zappadello gibt's schon seit 1992 – und sie ist seither ein fester Bestandteil
                des Kaunertals. Super Musik, gute Leute und eine Stimmung, die man nicht beschreiben
                kann – die muss man erlebt haben.
              </p>

              <p className="text-xl text-gray-200 leading-relaxed">
                Seit 2024 schmeißen Manuel und Iris den Laden gemeinsam und sorgen mit viel Herzblut
                für unvergessliche Abende. Ob gemütlich was trinken oder bis in die Morgenstunden
                feiern – hier ist alles möglich.
              </p>
            </div>

            {/* Features - Moderner Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center space-y-3 p-6 bg-black/20 backdrop-blur-sm border border-gray-600/40 rounded-xl hover:border-gray-400/80 transition-all duration-300">
                <span className="text-4xl">🍸</span>
                <span className="text-gray-200 font-semibold text-center">
                  Cocktails, die du heiraten willst
                </span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-black/20 backdrop-blur-sm border border-gray-600/40 rounded-xl hover:border-gray-400/80 transition-all duration-300">
                <span className="text-4xl">🍺</span>
                <span className="text-gray-200 font-semibold text-center">
                  Kein Bier? Kein Wir.
                </span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-black/20 backdrop-blur-sm border border-gray-600/40 rounded-xl hover:border-gray-400/80 transition-all duration-300">
                <span className="text-4xl">🎵</span>
                <span className="text-gray-200 font-semibold text-center">
                  Nur kein Schlager – versprochen
                </span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-black/20 backdrop-blur-sm border border-gray-600/40 rounded-xl hover:border-gray-400/80 transition-all duration-300">
                <span className="text-4xl">🎉</span>
                <span className="text-gray-200 font-semibold text-center">
                  Events, die man Montag noch spürt
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
