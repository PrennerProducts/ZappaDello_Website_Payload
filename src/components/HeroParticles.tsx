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
    fullScreen: { enable: true, zIndex: 0 },
    background: {
      color: '#000',
    },
    particles: {
      number: { value: 100 },
      color: {
        value: ['#00FFFF', '#FF00FF', '#39FF14', '#FFFF00'],
      },
      shape: { type: 'circle' },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 4 },
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

  return init ? <Particles id="heroParticles" options={options} /> : null
}
