import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function LongPantRack({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/long-short.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 7.03, 0]}>
        <mesh receiveShadow castShadow geometry={nodes.Cylinder005.geometry} material={materials['Material.006']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder005_1.geometry} material={materials['Material.028']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder005_2.geometry} material={materials['Material.004']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder005_3.geometry} material={materials['Material.005']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder005_4.geometry} material={materials['Material.013']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder005_5.geometry} material={materials['Material.027']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder005_6.geometry} material={materials['Material.026']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/long-short.glb')
