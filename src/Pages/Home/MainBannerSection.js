import React from 'react'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function MainBannerSection() {
  return (
    <>
      <mesh
        ref={ref}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
      >
        <torusKnotGeometry args={[10, 3, 128, 32]} />
        <meshBasicMaterial color={hovered ? 'lightblue' : 'hotpink'} />
      </mesh>
    </>
  )
}

export default MainBannerSection
