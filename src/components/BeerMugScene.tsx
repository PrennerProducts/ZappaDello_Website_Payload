'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import BeerMug3D from './BeerMug3D'

export default function BeerMugScene() {
  return (
    <div className="w-full h-full">
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 8], fov: 75 }}>
        <Suspense fallback={null}>
          <BeerMug3D />
        </Suspense>
      </Canvas>
    </div>
  )
}
