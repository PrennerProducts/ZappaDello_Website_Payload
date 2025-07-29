'use client'

import { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default function BeerMug3D() {
  const groupRef = useRef<THREE.Group>(null)
  const [exploded, setExploded] = useState(false)
  const [liquidLevel, setLiquidLevel] = useState(1)

  // Load the beer GLTF model
  const gltf = useLoader(GLTFLoader, '/beer.glb')
  const model = gltf.scene

  useFrame((state) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()

    // Kontinuierliche Animation
    groupRef.current.rotation.y = time * 0.5 // Langsame kontinuierliche Y-Rotation
    groupRef.current.rotation.x = Math.sin(time * 2) * 0.2 // Sanfte X-Rotation
    groupRef.current.position.y = Math.sin(time * 1.5) * 0.5 // Schwebende Bewegung
    groupRef.current.position.x = Math.sin(time * 1) * 0.3 // Horizontale Bewegung

    // Flüssigkeitsstand Animation
    const newLiquidLevel = Math.max(0.3, 1 - Math.sin(time * 0.5) * 0.4)
    setLiquidLevel(newLiquidLevel)

    // Explosion wenn leer
    if (newLiquidLevel <= 0.4 && !exploded) {
      setExploded(true)
      // Explosion Animation
      if (groupRef.current) {
        groupRef.current.scale.setScalar(1.5)
        setTimeout(() => {
          if (groupRef.current) {
            groupRef.current.scale.setScalar(1)
          }
        }, 500)
      }
    }

    // Explosion Particles Animation
    if (exploded) {
      groupRef.current.children.forEach((child, index) => {
        if (child.type === 'Mesh' && index > 0) {
          // Skip main model
          const particle = child as THREE.Mesh
          const angle = (index / 20) * Math.PI * 2
          const radius = 2 + Math.sin(time * 3 + index) * 0.5
          particle.position.x = Math.cos(angle) * radius
          particle.position.y = Math.sin(angle) * radius + time * 2
          particle.position.z = Math.sin(time * 2 + index) * 0.5
        }
      })
    }
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#ff6b35" />
      <pointLight position={[0, 5, 0]} intensity={1.0} color="#00ffff" />

      {/* Beer Model */}
      <group ref={groupRef}>
        <primitive object={model} scale={[16, 16, 16]} />

        {/* Explosion Particles */}
        {exploded && (
          <>
            {Array.from({ length: 20 }).map((_, i) => (
              <mesh key={i} position={[0, 0, 0]}>
                <sphereGeometry args={[0.1, 4, 4]} />
                <meshStandardMaterial
                  color={['#FFD700', '#FFA500', '#FF6347'][i % 3]}
                  emissive={['#FFD700', '#FFA500', '#FF6347'][i % 3]}
                  emissiveIntensity={0.5}
                />
              </mesh>
            ))}
          </>
        )}
      </group>
    </>
  )
}
