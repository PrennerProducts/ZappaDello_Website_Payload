'use client'

import { Html } from '@react-three/drei'
import { ReactNode } from 'react'

export default function Panel({
  children,
  position = [0, 0, 0],
}: {
  children: ReactNode
  position?: [number, number, number]
}) {
  return (
    <group position={position}>
      <Html center zIndexRange={[100, 0]}>
        <div className="w-screen h-screen flex items-center justify-center">{children}</div>
      </Html>
    </group>
  )
}
