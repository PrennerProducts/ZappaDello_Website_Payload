// components/3D/ScrollScene.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

import Panel from './Panel'
import HeroSection from '../sections/HeroSection'
import GallerySection from '../sections/GallerySection'
import EventsSection from '../sections/EventsSection'
import AboutSection from '../sections/AboutSection'
import { useScrollProgress } from '@/lib/useScrollProgress'

type Image = {
  id: string
  url: string
  caption?: string
}

function Scene({ scroll, images }: { scroll: number; images: Image[] }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)

  useFrame(() => {
    if (cameraRef.current) {
      // Sanfte Positionsberechnung basierend auf Abschnitt
      const panelDistance = 20 // z.B. 20 Einheiten pro Panel
      const z = 50 - scroll * (panelDistance * 4) // 4 Panels
      cameraRef.current.position.z = z

      // Optional leichtes Rotieren
      cameraRef.current.rotation.y = scroll * 0.2
    }
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 50]} />
      <ambientLight intensity={1} />

      <Panel position={[0, 0, 0]}>
        {scroll < 0.25 && (
          <div className="w-full h-full text-white text-4xl flex justify-center items-center">
            <HeroSection />
          </div>
        )}
      </Panel>

      <Panel position={[0, 0, -10]}>
        {scroll >= 0.25 && scroll < 0.5 && (
          <div className="w-full h-screen text-white text-4xl flex justify-center items-center">
            <GallerySection images={images} />
          </div>
        )}
      </Panel>

      <Panel position={[0, 0, -20]}>
        {scroll >= 0.5 && scroll < 0.75 && (
          <div className="w-full h-full bg-green-600 text-white text-4xl flex justify-center items-center">
            <EventsSection />
          </div>
        )}
      </Panel>

      <Panel position={[0, 0, -30]}>
        {scroll >= 0.75 && (
          <div className="w-full h-full bg-blue-600 text-white text-4xl flex justify-center items-center">
            <AboutSection />
          </div>
        )}
      </Panel>
    </>
  )
}

export default function ScrollScene({ images }: { images: Image[] }) {
  const scroll = useScrollProgress(4)

  return (
    <div className="relative z-10 h-[400vh] pointer-events-none">
      {/* Canvas im Hintergrund */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <Scene scroll={scroll} images={images} />
          </Suspense>
        </Canvas>
      </div>

      {/* Dummy-Sektion zum Scrollen */}
      <div className="relative z-10 h-[400vh] pointer-events-none" />
    </div>
  )
}
