'use client'

import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { useRef } from 'react'
import * as THREE from 'three'

export default function ScrollContent() {
  const scroll = useScroll()
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    const offset = scroll.offset // 0 bis 1
    if (meshRef.current) {
      meshRef.current.rotation.y = offset * Math.PI * 2
      meshRef.current.position.y = -offset * 10
    }
  })

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  )
}
