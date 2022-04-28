import React from 'react'
import styled from 'styled-components'
import TagItem from './TagItem'

const Container = styled.div`
    margin: 30px 0;

    @media only screen and (max-width: 480px) {
      margin: 20px 0;
    }
`

const Title = styled.h1`
    font-size: 24px;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      right: 0;
      top: 20px;
      width: 80%;
      background-color: blueviolet;
      height: 2px;
      display: block;
    }

    @media only screen and (max-width: 480px) {
        font-size: 20px;
        margin: 20px 0;

        ::after {
          width: 80%;
        }
    }
`

const Tags = () => {
  return (
    <Container>
        <Title>Tags</Title>
        <TagItem/>
    </Container>
  )
}

export default Tags