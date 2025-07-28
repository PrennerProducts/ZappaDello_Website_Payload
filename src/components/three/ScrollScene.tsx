'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll, PerspectiveCamera } from '@react-three/drei'
import { ReactNode, Suspense, useRef } from 'react'
import * as THREE from 'three'

import HeroSection from '../sections/HeroSection'
import GallerySection from '../sections/GallerySection'
import EventsSection from '../sections/EventsSection'
import AboutSection from '../sections/AboutSection'

type Image = {
  id: string
  url: string
  caption?: string
}

function Scene({ images }: { images: Image[] }) {
  const scroll = useScroll()
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)

  useFrame(() => {
    if (!cameraRef.current) return

    const progress = scroll.offset // 0–1 linear scrollprogress
    const step = Math.round(progress * 3) // 4 Sektionen = 3 Steps

    const panelDistance = 20
    cameraRef.current.position.z = 50 - step * panelDistance
    cameraRef.current.rotation.y = step * 0.2
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 50]} />
      <ambientLight intensity={1} />

      {/* Panels einzeln zeigen je nach Scroll-Step */}
      <Scroll>
        <group>
          <HeroSection />
          <GallerySection images={images} />
          <EventsSection />
          <AboutSection />
        </group>
      </Scroll>
    </>
  )
}

export default function ScrollScene({ images }: { images: Image[] }) {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-0 pointer-events-none">
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.2}>
            <Scene images={images} />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
