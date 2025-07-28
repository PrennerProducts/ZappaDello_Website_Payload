'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function DiscoBall() {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const parent = useRef<THREE.Group>(null!)
  const count = 1000

  useEffect(() => {
    const dummy = new THREE.Object3D()
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()
      dummy.position.set(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi),
      )
      dummy.lookAt(0, 0, 0)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    }
    mesh.current.instanceMatrix.needsUpdate = true
  }, [])

  useFrame(() => {
    if (parent.current) {
      parent.current.rotation.y += 0.002
      parent.current.rotation.x += 0.001
    }
  })

  return (
    <group ref={parent} scale={1.5} position={[-3, 0.5, 0]}>
      {' '}
      {/* 👈 größer machen */}
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <planeGeometry args={[0.4, 0.4]} />
        <meshStandardMaterial
          metalness={1}
          roughness={0.11} // ⬅️ nicht 0, sondern leicht matt, sonst siehst du Licht kaum!
          color="white"
          envMapIntensity={1.5}
        />
      </instancedMesh>
    </group>
  )
}
