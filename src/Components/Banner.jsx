import React from 'react'
import styled from 'styled-components'
import { Banners } from '../Data'

const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    margin: 20px 0;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Banner = () => {
  return (
    <Container>
      {Banners.map((item) => (
        <Wrapper key={item.id}>
          <Image src={item.image}/>
        </Wrapper>
      ))}
    </Container>
  )
}

export default Banner