'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll, PerspectiveCamera, Html, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import HeroSection from '../sections/HeroSection'

export default function CubeScrollScene() {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <>
      {/* Optional: sticky UI über 3D */}
      <div className="fixed top-0 left-0 w-full h-screen z-10 pointer-events-none">
        <div className="flex items-center justify-center h-full text-white text-5xl font-bold">
          {['Hero', 'Gallery', 'Events', 'About'][currentSection]}
        </div>
      </div>

      {/* Canvas mit Scroll */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <ScrollControls pages={4} damping={0.2}>
            <Scene onSectionChange={setCurrentSection} />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  )
}

function Scene({ onSectionChange }: { onSectionChange: (i: number) => void }) {
  const scroll = useScroll()
  const groupRef = useRef<THREE.Group>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)

  useFrame(() => {
    const t = scroll.offset // 0..1
    const pages = 4
    const section = Math.floor(t * pages)
    const localT = t * pages - section // Wert von 0 bis 1 innerhalb einer Section

    // Phasen definieren
    let targetZ = 12 // "normaler" Zoom rein
    if (localT < 0.3) {
      // Phase A: rauszoomen
      const progress = localT / 0.3
      targetZ = THREE.MathUtils.lerp(12, 25, progress)
    } else if (localT > 0.7) {
      // Phase C: reinzoomen
      const progress = (localT - 0.7) / 0.3
      targetZ = THREE.MathUtils.lerp(25, 12, progress)
    } else {
      // Phase B: bleibt rausgezoomt
      targetZ = 25
    }

    // Rotation
    const rotationProgress = Math.min(Math.max((localT - 0.3) / 0.4, 0), 1) // 0–1 innerhalb von Phase B
    const targetAngle = THREE.MathUtils.lerp(
      section * (Math.PI / 2),
      (section + 1) * (Math.PI / 2),
      rotationProgress,
    )

    // Kamera-Animation
    if (cameraRef.current) {
      cameraRef.current.position.z = THREE.MathUtils.lerp(
        cameraRef.current.position.z,
        targetZ,
        0.1,
      )
    }

    // Würfelrotation
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetAngle,
        0.1,
      )
    }
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 25]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <group ref={groupRef}>
        <CubeFace position={[0, 0, -12]} color="red" isHero />
        <CubeFace
          position={[12, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          color="green"
          label="Gallery"
        />
        <CubeFace position={[0, 0, 12]} rotation={[0, Math.PI, 0]} color="blue" label="Events" />
        <CubeFace
          position={[-12, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          color="purple"
          label="About"
        />
      </group>
    </>
  )
}

function CubeFace({
  position,
  rotation = [0, 0, 0],
  color,
  label,
  isHero = false,
}: {
  position: [number, number, number]
  rotation?: [number, number, number]
  color: string
  label?: string
  isHero?: boolean
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[12, 8]} />
      <meshStandardMaterial color={color} />

      {isHero ? (
        <Html transform distanceFactor={12} position={[0, 0, 0.1]} occlude zIndexRange={[100, 0]}>
          <div className="w-screen h-full">
            <HeroSection />
          </div>
        </Html>
      ) : (
        <Text position={[0, 0, 0.1]} fontSize={1} color="white" anchorX="center" anchorY="middle">
          {label}
        </Text>
      )}
    </mesh>
  )
}
