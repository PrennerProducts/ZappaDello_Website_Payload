export type PayloadImage = {
  url: string
  width: number
  height: number
  alt: string
}

// Type declarations to fix @react-three/drei issues
declare module '@react-three/drei' {
  export * from '@react-three/drei'
}

// Override problematic types
declare module '@react-three/drei/core/PerspectiveCamera' {
  import { ReactElement } from 'react'
  import { PerspectiveCameraProps } from '@react-three/drei'

  export function PerspectiveCamera(props: PerspectiveCameraProps): ReactElement
}
