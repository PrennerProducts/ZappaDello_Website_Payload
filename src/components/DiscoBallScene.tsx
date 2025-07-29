// components/DiscoBallScene.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
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
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (hasError) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold mb-2">Zappadello</h3>
          <p className="text-gray-300">Die Bar im Kaunertal</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
            <p>Lade 3D-Szene...</p>
          </div>
        </div>
      )}
      <Canvas
        camera={{ position: [0, 1, 5], fov: 60 }}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={[1, 2]}
        onError={() => setHasError(true)}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <DiscoBall />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <Environment files="/partyzappa.JPG" background />
      </Canvas>
    </div>
  )
}
