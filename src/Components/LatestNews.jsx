import React from 'react'
import styled from 'styled-components'
import PostLatest from './PostLatest'

const Container = styled.div`
    flex: 8;
    margin: 20px 15px 20px 0;

    @media only screen and (max-width: 480px) {
        width: 100%;
        margin: 0;
        margin-top: 50px;
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
      width: 80%;
      background-color: red;
      height: 2px;
      display: block;
    }

    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 20px;
        margin: 20px 0;

        ::after {
          width: 60%;
        }
    }
`

const LatestNews = () => {
  return (
    <Container>
        <Title>Latest News</Title>
        <PostLatest/>
    </Container>
  )
}

export default LatestNews