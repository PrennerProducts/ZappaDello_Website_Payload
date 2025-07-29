'use client'

import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { Suspense } from 'react'

import ScrollModel from './ScrollModel'
import Overlay from './Overlay'

export default function ScrollExperience() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-0 pointer-events-none">
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={2} damping={0.2}>
            <Scroll>
              <ScrollModel />
            </Scroll>
            <Scroll html>
              <Overlay />
              <div className="w-full h-screen" />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
