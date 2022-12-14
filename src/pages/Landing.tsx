import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.span`
  font-size: 20px;
  color: #fff;
`

const Landing: FC = () => {
  return (
    <Container>
      <Text>Tools're under-development</Text>
    </Container>
  )
}
export default Landing
