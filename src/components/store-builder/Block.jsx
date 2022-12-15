import { animated, config, useSpring } from '@react-spring/three'
import React, { useEffect, useRef, useState } from 'react'
import { useStoreBuilderStore } from '../../stores/storeBuilder'
import { Cashier, LongPantRack, LongShirtRack, ShortPantRack, ShortShirtRack } from './furnitures'

function Block({ isInteractive = true, id, initialPosition, type }) {
  const [isBlockClicked, setIsBlockClicked] = useState(false)
  const positionRaycast = useStoreBuilderStore((state) => state.position)
  const [isEditing, setIsEditing, updateBlock] = useStoreBuilderStore((state) => [
    state.isEditing,
    state.setIsEditing,
    state.updateBlock,
  ])
  const ref = useRef()
  const { position } = useSpring({
    position: [
      !ref.current ? initialPosition[0] : isBlockClicked && isEditing ? positionRaycast.x : ref.current.position.x,
      isBlockClicked ? 2 : initialPosition[1],
      !ref.current ? initialPosition[2] : isBlockClicked && isEditing ? positionRaycast.z : ref.current.position.z,
    ],
    config: config.stiff,
  })

  const { scale, rotation } = useSpring({
    from: {
      scale: 0.2,
      // rotation: [0, -3, 0],
    },
    to: {
      scale: 1,
      // rotation: [0, 0, 0],
    },
    config: config.wobbly,
  })

  useEffect(() => {
    const handlePointerUp = (e) => {
      e.stopPropagation()
      if (isBlockClicked) {
        setIsBlockClicked(false)
        setIsEditing(false)

        updateBlock({ id, position: [ref.current.position.x, 0, ref.current.position.z] })
      }
    }

    isInteractive && window.addEventListener('pointerup', handlePointerUp)
    return () => window.removeEventListener('pointerup', handlePointerUp)
  }, [isBlockClicked])

  const handlePointerDown = (e) => {
    e.stopPropagation()
    if (isInteractive) {
      setIsBlockClicked(true)
      setIsEditing(true)
    }
  }

  const handlePointerEnter = (e) => {
    e.stopPropagation()
    document.body.style.cursor = 'var(--cursor-pointer)'
  }

  const handlePointerLeave = (e) => {
    e.stopPropagation()
    document.body.style.cursor = 'var(--cursor-auto)'
  }

  return (
    <animated.group
      ref={ref}
      position={position}
      scale={scale}
      rotation={rotation}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}>
      {
        {
          cashier: <Cashier />,
          'long-shirt-rack': <LongShirtRack />,
          'long-pant-rack': <LongPantRack />,
          'short-shirt-rack': <ShortShirtRack />,
          'short-pant-rack': <ShortPantRack />,
        }[type]
      }
    </animated.group>
  )
}

export default Block
