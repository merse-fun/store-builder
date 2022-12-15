import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ShortPantRack({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/short-short.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 7.03, 0]}>
        <mesh receiveShadow castShadow geometry={nodes.Cylinder006.geometry} material={materials['Material.006']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder006_1.geometry} material={materials['Material.005']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder006_2.geometry} material={materials['Material.004']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder006_3.geometry} material={materials['Material.013']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder006_4.geometry} material={materials['Material.030']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder006_5.geometry} material={materials['Material.031']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder006_6.geometry} material={materials['Material.029']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/short-short.glb')
