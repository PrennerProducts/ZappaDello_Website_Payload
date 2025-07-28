'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import DiscoBall from './Discoball'

export default function DiscoBallCanvas() {
  return (
    <Canvas
      className="absolute inset-0 !w-full !h-full"
      gl={{ alpha: true }}
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      {/* 🌇 Environment Lighting */}
      <Environment files="/hdr3.jpg" background={false} />

      {/* 🌈 Bunte Pointlights für Disco-Effekt */}
      <pointLight color="#ff00ff" intensity={8} position={[5, 5, 5]} />
      <pointLight color="#00ffff" intensity={6} position={[-5, 5, -5]} />
      <pointLight color="#00ff00" intensity={6} position={[5, -5, -5]} />
      <pointLight color="#3399ff" intensity={6} position={[-5, -5, 5]} />
      <pointLight color="#ffff00" intensity={5} position={[0, 7, 0]} />
      <pointLight color="#ff3399" intensity={5} position={[0, -7, 0]} />

      {/* 🪩 Spiegel-Disco-Kugel */}
      <DiscoBall />

      {/* 🎛 Steuerung (nur Dev) */}
      <OrbitControls />
    </Canvas>
  )
}
