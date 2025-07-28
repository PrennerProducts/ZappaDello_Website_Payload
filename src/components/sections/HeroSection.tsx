'use client'

import AnimatedLogo from '../AnimatedLogo'
import HeroParticles from '../HeroParticles'
import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden border-2 border-amber-700">
      {/* ✨ Partikel im Hintergrund */}
      <div className="absolute inset-0 -z-10 ">
        <HeroParticles />
      </div>

      {/* Logo */}
      <div className="max-w-xs sm:max-w-md md:max-w-lg  bg-black">
        <AnimatedLogo />
      </div>

      {/* Typing-Headline */}
      <TypeAnimation
        sequence={[
          1000,
          'Come for the Drinks, Stay for the Vibe',
          2500,
          'More Than a Bar. It’s a Vibe.',
          2500,
          'Drinks. Lights. Nights.',
          2500,
        ]}
        wrapper="h1"
        cursor={true}
        speed={40}
        repeat={Infinity}
        className="mt-8 mb-1 text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
      />

      {/* Subtitel */}
      <p className="mt-4 text-center text-gray-400 text-lg max-w-xl px-4">
        The music, the people and you!
      </p>
    </section>
  )
}
