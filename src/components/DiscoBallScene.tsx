'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { RGBELoader } from 'three-stdlib'

function DiscoBall() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={ref} position={[0, 1, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial metalness={1} roughness={0.1} envMapIntensity={1} color="white" />
    </mesh>
  )
}

function BackgroundEnv() {
  const texture = useLoader(RGBELoader, '/studio.hdr') // z. B. HDR-Datei in /public
  texture.mapping = THREE.EquirectangularReflectionMapping
  return <primitive attach="background" object={texture} />
}

export default function DiscoBallScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }} dpr={1} gl={{ antialias: false }}>
        {/* Optional: OrbitControls */}
        <OrbitControls enableZoom={false} />
        {/* Realistisches Environment */}
        <Environment files="/iris.jpeg" background />
        {/* Licht + Kugel */}
        <ambientLight intensity={0.5} />
        <DiscoBall />
      </Canvas>
    </div>
  )
}
