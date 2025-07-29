'use client'

import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export default function ScrollModel() {
  const scroll = useScroll()
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!meshRef.current || !groupRef.current) return

    const offset = scroll.offset // 0 bis 1
    const range = scroll.range(0, 1) // 0 bis 1 für die erste Seite

    // Erste Seite (0-0.5): Bierkrug-Animation
    if (offset < 0.5) {
      const firstPageProgress = offset * 2 // 0 bis 1 für erste Seite

      // Rotation basierend auf Scroll-Position
      meshRef.current.rotation.y = firstPageProgress * Math.PI * 4 // 2 volle Umdrehungen
      meshRef.current.rotation.x = firstPageProgress * Math.PI * 2 // 1 volle Umdrehung

      // Position basierend auf Scroll-Position
      meshRef.current.position.y = Math.sin(firstPageProgress * Math.PI * 2) * 2 // Sanfte Auf- und Abbewegung
      meshRef.current.position.x = Math.cos(firstPageProgress * Math.PI * 2) * 1.5 // Seitliche Bewegung

      // Skalierung basierend auf Scroll-Position
      const scale = 1 + Math.sin(firstPageProgress * Math.PI * 3) * 0.3
      meshRef.current.scale.setScalar(scale)

      // Gruppierung für zusätzliche Effekte
      groupRef.current.rotation.z = firstPageProgress * Math.PI * 0.5
    } else {
      // Zweite Seite (0.5-1): Sanftere Animation für Gallery
      const secondPageProgress = (offset - 0.5) * 2 // 0 bis 1 für zweite Seite

      // Sanftere Rotation für Gallery-Bereich
      meshRef.current.rotation.y = Math.PI * 4 + secondPageProgress * Math.PI * 0.5
      meshRef.current.rotation.x = Math.PI * 2 + secondPageProgress * Math.PI * 0.3

      // Sanfte Bewegung nach oben beim Übergang zur Gallery
      meshRef.current.position.y = 2 + secondPageProgress * 1
      meshRef.current.position.x = Math.cos(secondPageProgress * Math.PI) * 0.5

      // Leichte Skalierung für Gallery
      const scale = 1.3 - secondPageProgress * 0.1
      meshRef.current.scale.setScalar(scale)

      // Sanfte Gruppierung
      groupRef.current.rotation.z = Math.PI * 0.5 + secondPageProgress * Math.PI * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ff6b35" />

      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Hauptmodell - Bierkrug-ähnliche Form */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <cylinderGeometry args={[1, 1.2, 3, 8]} />
          <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.4} />
        </mesh>

        {/* Griff */}
        <mesh position={[1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.3, 0.1, 8, 16]} />
          <meshStandardMaterial color="#654321" metalness={0.5} roughness={0.3} />
        </mesh>

        {/* Schaum oben */}
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[1.1, 8, 6]} />
          <meshStandardMaterial color="#F5DEB3" transparent opacity={0.8} />
        </mesh>

        {/* Flüssigkeit im Glas */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.9, 1.1, 2.5, 8]} />
          <meshStandardMaterial color="#FFD700" transparent opacity={0.7} />
        </mesh>
      </group>
    </>
  )
}
