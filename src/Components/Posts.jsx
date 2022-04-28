import React from 'react'
import styled from 'styled-components'
import LatestNews from './LatestNews'
import PopularNews from './PopularNews'

const Container = styled.div`
    display: flex;

    @media only screen and (max-width:480px) {
      display: flex;
      flex-direction: column;
    }
`

const Posts = () => {
  return (
    <Container>
      <LatestNews/>
      <PopularNews/>
    </Container>
  )
}

export default Posts