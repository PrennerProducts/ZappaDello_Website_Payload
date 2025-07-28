import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

export function SceneContent() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  const scroll = useScroll()

  useFrame(() => {
    const offset = scroll.offset // Bereich 0–1

    if (cameraRef.current) {
      cameraRef.current.position.z = 15 - offset * 15 // von z=15 zu z=0
      cameraRef.current.position.y = Math.sin(offset * Math.PI) * 2 // kleine vertikale Bewegung
      cameraRef.current.rotation.y = offset * Math.PI * 0.5 // leichte Drehung
    }
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 15]} />
      <ambientLight intensity={1} />
    </>
  )
}
