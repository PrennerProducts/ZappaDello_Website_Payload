'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll, PerspectiveCamera, useScroll, Html } from '@react-three/drei'
import { Suspense, useRef } from 'react'
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
    const offset = scroll.offset // smooth: 0–1

    const totalPanels = 4
    const panelDistance = 20
    const targetZ = 50 - offset * panelDistance * (totalPanels - 1)

    if (cameraRef.current) {
      cameraRef.current.position.z += (targetZ - cameraRef.current.position.z) * 0.1
      cameraRef.current.rotation.y = offset * 0.3
    }
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 50]} />
      <ambientLight intensity={1} />

      {/* Scrollbarer Inhalt */}
      <Scroll>
        <Html center position={[0, 0, 0]} zIndexRange={[100, 0]}>
          <div className="w-screen h-screen flex items-center justify-center">
            <HeroSection />
          </div>
        </Html>

        <Html center position={[0, 0, -20]} zIndexRange={[100, 0]}>
          <div className="w-screen h-screen flex items-center justify-center">
            <GallerySection images={images} />
          </div>
        </Html>

        <Html center position={[0, 0, -40]} zIndexRange={[100, 0]}>
          <div className="w-screen h-screen flex items-center justify-center">
            <EventsSection />
          </div>
        </Html>

        <Html center position={[0, 0, -60]} zIndexRange={[100, 0]}>
          <div className="w-screen h-screen flex items-center justify-center">
            <AboutSection />
          </div>
        </Html>
      </Scroll>
    </>
  )
}

export default function ScrollScene({ images }: { images: Image[] }) {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-50 pointer-events-none">
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          {/* 🧠 Hier steuerst du: wie VIEL man scrollen muss */}
          <ScrollControls pages={4} damping={0.15}>
            <Scene images={images} />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
