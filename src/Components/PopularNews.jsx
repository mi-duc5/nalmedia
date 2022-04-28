import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import PostPopular from './PostPopular'
import Tags from './Tags'

const Container = styled.div`
    flex: 4;
    margin: 20px 0px 20px 20px;

    @media only screen and (max-width: 480px) {
        margin: 20px 0 0;
    }
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      right: 0;
      top: 20px;
      width: 60%;
      background-color: black;
      height: 2px;
      display: block;
    }

    @media only screen and (max-width: 480px) {
        font-size: 20px;
        margin: 20px 0;
    }
`

const PopularNews = () => {
  return (
    <>
      <Container>
          <Title>Popular News</Title>
          <PostPopular/>
          <Tags/>
          <Banner/>
      </Container>
    </>
  )
}

export default PopularNews