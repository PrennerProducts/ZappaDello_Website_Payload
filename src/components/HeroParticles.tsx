// Datei: components/HeroParticles.tsx
'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export default function HeroParticles() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  const options: ISourceOptions = {
    fullScreen: { enable: true, zIndex: 10 },
    background: {
      color: 'transparent',
    },
    particles: {
      number: { value: 50 },
      // color: {
      //   value: [
      //     '#a8a29e', // Stone Gray
      //     '#78716c', // Stone Gray (dunkler)
      //     '#f97316', // Orange
      //     '#f59e0b', // Amber
      //     '#d97706', // Orange (dunkler)
      //   ],
      // },
      color: {
        value: [
          '#06b6d4', // Cyan (Neon Türkis)
          '#ec4899', // Pink (Neon Pink)
          '#a855f7', // Purple (Neon Lila)
          '#3b82f6', // Blue (Neon Blau)
          '#e879f9', // Fuchsia (Neon Magenta)
          '#10b981', // Emerald (Neon Grün)
          '#fb923c', // Orange (Neon Orange)
          '#8b5cf6', // Violet (Neon Violett)
        ],
      },
      shape: { type: 'circle' },
      opacity: {
        value: 0.6,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        outModes: { default: 'out' },
      },
    },
    detectRetina: true,
  }

  return init ? (
    <div className="pointer-events-none">
      <Particles id="heroParticles" options={options} />
    </div>
  ) : null
}
