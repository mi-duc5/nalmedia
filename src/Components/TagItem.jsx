import React from 'react'
import styled from 'styled-components'
import { Tag } from '../Data'

const Container = styled.div`
    width: 100%;
`

const InfoContainer = styled.div`
  display: flex;
  margin: 10px 0;
`

const Title = styled.h1`
  font-size: 24px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  color: #666;

  @media only screen and (max-width: 480px) {
      font-size: 16px;
  }
`

const Icon = styled.div`
  font-size: 20px;
  margin-right: 20px;
  color: #666;

  @media only screen and (max-width: 480px) {
        font-size: 16px;
  }
`

const TagItem = () => {
  return (
    <Container>
          {Tag.map((item) => (
            <InfoContainer>
              <Title>
                <Icon><i className="fa-solid fa-hashtag"></i></Icon>{item.tag}
              </Title>
            </InfoContainer>
          ))}
    </Container>
  )
}

export default TagItem