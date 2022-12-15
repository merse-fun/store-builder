import React from 'react'
import { useStoreBuilderStore } from '../../stores/storeBuilder'
import styled from 'styled-components'

const Container = styled.div`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 1;
`

const ArrowButton = styled.button<{ isLeft: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  z-index: 1;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => (props.isLeft ? '24px' : '')};
  right: ${(props) => (!props.isLeft ? '24px' : '')};
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`

const Wrapper = styled.div`
  width: 620px;
  border-radius: 30px 30px 0px 0px;
  background: #ffffff;
  height: 160px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 54px;
`

const Block = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background: transparent;
  cursor: var(--cursor-pointer);
`

const BLOCK_LISTS = [
  {
    id: 1,
    preview: './imgs/cashier.png',
    type: 'cashier',
  },
  {
    id: 2,
    preview: './imgs/long-pant-rack.png',
    type: 'long-pant-rack',
  },
  {
    id: 3,
    preview: './imgs/long-shirt-rack.png',
    type: 'long-shirt-rack',
  },
]

const BottomPanel = () => {
  const [blocks, addBlock, isEditing] = useStoreBuilderStore((state) => [state.blocks, state.addBlock, state.isEditing])

  const handleAddBlock = (type: string) => {
    const payload = {
      id: Number(blocks.length),
      position: [0, 0.5, 0],
      rotation: [0, 0, 0],
      type,
    }
    addBlock(payload)
  }

  return (
    <Container>
      <ArrowButton isLeft={true}>
        <Icon src='./left-arrow.svg' alt='' />
      </ArrowButton>
      <ArrowButton isLeft={false}>
        <Icon src='./right-arrow.svg' alt='' />
      </ArrowButton>
      <div>
        <Wrapper>
          {BLOCK_LISTS.map((block, index) => (
            <Block key={block.id} onClick={() => handleAddBlock(block.type)}>
              <img
                src={block.preview}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: 'cover',
                }}
              />
            </Block>
          ))}
        </Wrapper>
      </div>
    </Container>
  )
}

export default BottomPanel
