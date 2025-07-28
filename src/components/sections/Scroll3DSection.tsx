'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function SceneObjects() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  const scroll = useScroll()

  const group = useRef<THREE.Group>(null)

  useFrame(() => {
    const offset = scroll.offset

    // Kameraflug entlang der Z-Achse mit Kurve
    if (cameraRef.current) {
      cameraRef.current.position.set(
        Math.sin(offset * Math.PI) * 2,
        Math.sin(offset * Math.PI * 2) * 1.5,
        10 - offset * 20,
      )
      cameraRef.current.lookAt(0, 0, 0)
    }

    // Objektgruppe rotieren z. B. basierend auf Scroll
    if (group.current) {
      group.current.rotation.y = offset * Math.PI * 2
    }
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={1} />
      <group ref={group}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        <mesh position={[0, -5, -10]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="skyblue" />
        </mesh>

        <mesh position={[3, 2, -20]}>
          <coneGeometry args={[1.5, 3, 32]} />
          <meshStandardMaterial color="lime" />
        </mesh>
      </group>
    </>
  )
}

export default function Scroll3DOnly() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.2}>
            <Scroll>
              <SceneObjects />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
