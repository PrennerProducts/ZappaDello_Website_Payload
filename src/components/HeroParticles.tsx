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
      color: {
        value: ['#a8a29e', '#78716c', '#f97316', '#f59e0b', '#d97706'],
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
