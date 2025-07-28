'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedPlane() {
  const ref = useRef<THREE.Mesh>(null)
  const shaderRef = useRef<any>(null)
  useFrame(({ clock }) => {
    if (shaderRef.current) shaderRef.current.uniforms.uTime.value = clock.elapsedTime
  })
  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10, 1, 1]} />
      <shaderMaterial
        ref={shaderRef}
        side={THREE.DoubleSide}
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.);
            }
          `}
        fragmentShader={`
            uniform float uTime;
            varying vec2 vUv;
            float spot(vec2 p, vec2 center) {
              return smoothstep(0.15, 0.0, distance(p, center));
            }
            void main() {
              vec3 col = vec3(0);
              float t = uTime;
              // 4 moving spots at corners
              col += spot(vUv, vec2(0.2 + 0.1*sin(t*1.3), 0.8 + 0.1*cos(t*1.1))) * vec3(1,0,1);
              col += spot(vUv, vec2(0.8 + 0.1*cos(t*1.7), 0.2 + 0.1*sin(t*1.4))) * vec3(0,1,1);
              col += spot(vUv, vec2(0.5 + 0.1*sin(t*1.9), 0.5 + 0.1*cos(t*2.3))) * vec3(1,1,0);
              gl_FragColor = vec4(col,1.);
            }
          `}
      />
    </mesh>
  )
}

export default function MenuBackgroundCanvas() {
  return (
    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 3], fov: 75 }}>
      <AnimatedPlane />
    </Canvas>
  )
}
