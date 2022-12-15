import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useStoreBuilderStore } from '../../stores/storeBuilder'

export default function StoreBase({ ...props }) {
  const group = useRef()
  const groundRef = useRef()
  const { nodes, materials } = useGLTF('/models/room.glb')
  const updatePosition = useStoreBuilderStore((state) => state.updatePosition)

  const handlePointerMove = (e) => {
    e.stopPropagation()
    updatePosition({ x: e.point.x, z: e.point.z })
  }

  const handlePointerUp = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group position={[0.07, -0.4, 0]}>
          <mesh receiveShadow castShadow geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} />
          <mesh receiveShadow castShadow geometry={nodes.Cube006_1.geometry} material={nodes.Cube006_1.material} />
        </group>
        {/* <group position={[0.07, -0.4, 0]}>
          <mesh receiveShadow castShadow  geometry={nodes.Cube235.geometry} material={nodes.Cube235.material} />
          <mesh receiveShadow castShadow  geometry={nodes.Cube235_1.geometry} material={nodes.Cube235_1.material} />
        </group> */}
      </group>
      <mesh
        ref={groundRef}
        rotation={[Math.PI / -2, 0, 0]}
        position={[0, 1, -1]}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}>
        <planeGeometry args={[42, 88]} />
        <meshBasicMaterial attach='material' color='yellow' transparent opacity={0} />
      </mesh>
    </>
  )
}

useGLTF.preload('/models/room.glb')
