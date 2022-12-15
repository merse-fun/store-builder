import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function LongShirtRack({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/long-shirt.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 7.03, 0]}>
        <mesh receiveShadow castShadow geometry={nodes.Cylinder_1.geometry} material={materials['Material.006']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder_2.geometry} material={materials['Material.005']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder_3.geometry} material={materials['Material.004']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder_4.geometry} material={materials['Material.022']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder_5.geometry} material={materials['Material.014']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder_6.geometry} material={materials['Material.020']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder_7.geometry} material={materials['Material.019']} />
        <mesh receiveShadow castShadow geometry={nodes.Cylinder_8.geometry} material={materials['Material.021']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/long-shirt.glb')
