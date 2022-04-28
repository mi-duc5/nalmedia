import React from 'react'
import styled from 'styled-components'
import { LatestNews } from '../Data'

const Container = styled.div`
    width: 100%;

    @media only screen and (max-width: 480px) {
       width: 100%;
   }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;

  @media only screen and (max-width: 480px) {
      width: 100%;
      margin: 10px 0;
   }
`

const Image = styled.img`
    flex: 4;
    margin-right: 15px;
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media only screen and (max-width: 480px) {
      width: 30%;
   }
`

const Info = styled.div`
    flex: 8;
    margin-left:15px;
    margin-right: 15px;

    @media only screen and (max-width: 480px) {
      width: 70%;
    }
`

const CategoryName = styled.p`
    padding: 5px;
    background-color: red;
    width: 150px;
    text-align: center;
    color: white;

    @media only screen and (max-width: 480px) {
      font-size: 14px;
    }
`

const Title = styled.h3`
    margin: 5px 0;

    @media only screen and (max-width: 480px) {
      font-size: 14px;
    }
`

const Content = styled.p`
    color: #888;
    margin: 15px 0;
    text-indent: 20px;
    font-size: 16px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media only screen and (max-width: 480px) {
      display: none;
    }
`

const Author = styled.span`
    color: #888;
    font-size: 16px;

    @media only screen and (max-width: 480px) {
      display: none;
    }
`

const Date = styled.span`
    color: #888;
    font-size: 16px;

    @media only screen and (max-width: 480px) {
      display: none;
    }
`

const PostLatest = () => {
  return (
    <Container>
        <Wrapper>
        {LatestNews.map((item) => (
        <InfoContainer key={item.id}>
              <Image src={item.image} />
          <Info>
            <CategoryName style = {{backgroundColor: item.bgcl}}>{item.category_name}</CategoryName>
            <Title>{item.title}</Title>
            <Author>{item.author}, </Author>
            <Date>{item.date}</Date>
            <Content>{item.content}</Content>
          </Info>
        </InfoContainer>
      ))}
        </Wrapper>
    </Container>
  )
}

export default PostLatest