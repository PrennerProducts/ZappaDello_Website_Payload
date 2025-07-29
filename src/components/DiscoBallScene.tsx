// components/DiscoBallScene.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function DiscoBall() {
  const ballRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (ballRef.current) {
      ballRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh ref={ballRef} position={[0, 1, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial metalness={1} roughness={0.1} envMapIntensity={1} color="white" />
    </mesh>
  )
}

export default function DiscoBallScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <DiscoBall />
        <OrbitControls enableZoom={false} />
        <Environment files="/partyzappa.JPG" background />
      </Canvas>
    </div>
  )
}
