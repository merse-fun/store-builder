import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
`

const StoreBuilder = () => {
  useEffect(() => {
    document.title = 'Merse | Store Builder'
  }, [])

  return <Container></Container>
}

export default StoreBuilder
