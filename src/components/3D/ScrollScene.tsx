'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll, PerspectiveCamera, Html, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import HeroSection from '../sections/HeroSection'
import GallerySection from '../sections/GallerySection'

type Props = {
  images: {
    id: string
    url: string
    caption?: string
  }[]
}

export default function CubeScrollScene({ images }: Props) {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-10 pointer-events-none">
        <div className="flex items-center justify-center h-full text-white text-5xl font-bold">
          {['Hero', 'Gallery', 'Events', 'About'][currentSection]}
        </div>
      </div>

      <div className="fixed inset-0 z-0">
        <Canvas>
          <ScrollControls pages={4} damping={0.2}>
            <Scene onSectionChange={setCurrentSection} images={images} />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  )
}

function Scene({
  onSectionChange,
  images,
}: {
  onSectionChange: (i: number) => void
  images: {
    id: string
    url: string
    caption?: string
  }[]
}) {
  const scroll = useScroll()
  const groupRef = useRef<THREE.Group>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)

  const cameraZRef = useRef(25)

  useFrame(() => {
    const t = scroll.offset
    const pages = 4
    const section = Math.floor(t * pages)
    const localT = t * pages - section

    const cam = cameraRef.current
    if (!cam || !cam.aspect) return

    const planeWidth = 12
    const planeHeight = 8
    const fov = cam.fov
    const aspect = cam.aspect

    const zoomedInZ = getZoomToFitZ(planeWidth, planeHeight, fov, aspect)
    const zoomedOutZ = 25

    let targetZ = zoomedInZ
    if (localT < 0.3) {
      const progress = localT / 0.3
      targetZ = THREE.MathUtils.lerp(zoomedInZ, zoomedOutZ, progress)
    } else if (localT > 0.7) {
      const progress = (localT - 0.7) / 0.3
      targetZ = THREE.MathUtils.lerp(zoomedOutZ, zoomedInZ, progress)
    } else {
      targetZ = zoomedOutZ
    }

    cam.position.z = THREE.MathUtils.lerp(cam.position.z, targetZ, 0.1)
    cameraZRef.current = cam.position.z

    const rotProgress = Math.min(Math.max((localT - 0.3) / 0.4, 0), 1)
    const targetAngle = THREE.MathUtils.lerp(
      section * (Math.PI / 2),
      (section + 1) * (Math.PI / 2),
      rotProgress,
    )

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetAngle,
        0.1,
      )
    }

    onSectionChange(section)
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 25]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <group ref={groupRef}>
        <CubeFace position={[0, 0, -12]} color="red" isHero images={[]} />
        <CubeFace
          position={[12, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          color="green"
          isGallery
          images={images}
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
  isGallery = false,
  images = [],
}: {
  position: [number, number, number]
  rotation?: [number, number, number]
  color: string
  label?: string
  isHero?: boolean
  isGallery?: boolean
  images?: {
    id: string
    url: string
    caption?: string
  }[]
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {isHero && (
        <Html transform position={[0, -4, 0.01]} distanceFactor={12} portal={undefined}>
          <HeroSection />
        </Html>
      )}

      {isGallery && (
        <Html
          transform
          position={[0, -4, 0.01]}
          distanceFactor={12}
          occlude
          zIndexRange={[100, 0]}
          portal={undefined}
        >
          <GallerySection images={images} />
        </Html>
      )}

      {!isHero && !isGallery && label && (
        <Text position={[0, 0, 0.1]} fontSize={1} color="white" anchorX="center" anchorY="middle">
          {label}
        </Text>
      )}
    </group>
  )
}

function getZoomToFitZ(planeWidth: number, planeHeight: number, fov: number, aspect: number) {
  const fovRadians = (fov * Math.PI) / 180
  const heightZ = planeHeight / 2 / Math.tan(fovRadians / 2)
  const widthZ = planeWidth / aspect / 2 / Math.tan(fovRadians / 2)
  return Math.max(heightZ, widthZ)
}
