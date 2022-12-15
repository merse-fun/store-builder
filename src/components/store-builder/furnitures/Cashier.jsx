import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Cashier({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/cash.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 2, 0]}>
        <mesh receiveShadow castShadow geometry={nodes.Cube007.geometry} material={materials['Material.007']} />
        <mesh receiveShadow castShadow geometry={nodes.Cube007_1.geometry} material={materials['Material.008']} />
        <mesh receiveShadow castShadow geometry={nodes.Cube007_2.geometry} material={materials['Material.017']} />
        <mesh receiveShadow castShadow geometry={nodes.Cube007_3.geometry} material={materials['Material.018']} />
        <mesh receiveShadow castShadow geometry={nodes.Cube007_4.geometry} material={materials['Material.015']} />
        <mesh receiveShadow castShadow geometry={nodes.Cube007_5.geometry} material={materials['Material.016']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/cash.glb')
