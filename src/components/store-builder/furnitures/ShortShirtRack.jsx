import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ShortShirtRack({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/short-shirt.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 7.03, 0]}>
        <mesh receiveShadow castShadow geometry={nodes.Cylinder003.geometry} material={materials['Material.006']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder003_1.geometry} material={materials['Material.004']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder003_2.geometry} material={materials['Material.005']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder003_3.geometry} material={materials['Material.024']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder003_4.geometry} material={materials['Material.014']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder003_5.geometry} material={materials['Material.025']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder003_6.geometry} material={materials['Material.023']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/short-shirt.glb')
