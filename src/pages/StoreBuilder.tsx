import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion, useAnimationControls, useIsPresent } from 'framer-motion'
import React, { Fragment, Suspense, useEffect } from 'react'
import styled from 'styled-components'
import Block from '../components/store-builder/Block'
import BottomPanel from '../components/store-builder/BottomPanel'
import StoreBase from '../components/store-builder/StoreBase'
import { useStoreBuilderStore } from '../stores/storeBuilder'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
`

const Transitor = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: red;
  z-index: 2;
  width: 100%;
  height: 100%;
`

const StoreBuilder = () => {
  const isPresent = useIsPresent()
  const transitorAnimationControl = useAnimationControls()

  const [blocks, isEditing] = useStoreBuilderStore((state) => [state.blocks, state.isEditing])

  useEffect(() => {
    document.title = 'Merse | Store Builder'
    if (isPresent) {
      transitorOpenSequence()
    }
  }, [isPresent])

  const transitorOpenSequence = async () => {
    await transitorAnimationControl.start({ scaleX: 0, transition: { duration: 2 } })
  }

  return (
    <AnimatePresence mode='wait' initial={false}>
      <Fragment>
        <Transitor animate={transitorAnimationControl} exit={{ scaleX: 1, transition: { duration: 2 } }} />
        <Container>
          <BottomPanel />
          <Canvas shadows camera={{ fov: 25, position: [150, 40, 100] }}>
            <color attach='background' args={['#9dc0df']} />

            <OrbitControls
              enablePan={false}
              enableRotate={!isEditing}
              minAzimuthAngle={Math.PI / 8}
              maxAzimuthAngle={Math.PI / 2}
              rotateSpeed={0.5}
              minPolarAngle={0.5}
              maxPolarAngle={Math.PI / 2.1}
            />
            <Stage
              intensity={0.6}
              preset='rembrandt'
              shadows={{ type: 'accumulative', color: 'skyblue', colorBlend: 2, opacity: 2 }}
              adjustCamera={0}
              environment='city'>
              <StoreBase />
              <Suspense>
                {blocks.length > 0 &&
                  blocks.map((block) => (
                    <Block key={block.id} id={block.id} type={block.type} initialPosition={block.position} />
                  ))}
              </Suspense>
            </Stage>
          </Canvas>
        </Container>
      </Fragment>
    </AnimatePresence>
  )
}

export default StoreBuilder
