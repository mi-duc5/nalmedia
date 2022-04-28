import React from 'react'
import styled from 'styled-components'
import { PopularNews } from '../Data'

const Container = styled.div`
    width: 100%;
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
    object-fit: contain;
    flex: 4;
    margin-right: 10px;
`

const Info = styled.div`
    flex: 8;
    margin-left:10px;
    margin-right: 10px;
`

const CategoryName = styled.p`
    padding: 5px;
    background-color: red;
    width: 150px;
    text-align: center;
    font-size: 12px;
    color: white;
`

const Title = styled.h3`
    margin: 5px 0;
    font-size: 14px;
`


const PostPopular = () => {
  return (
    <Container>
      <Wrapper>
        {PopularNews.map((item) =>(
        <InfoContainer key={item.id}>
          <Image src={item.image}/>
          <Info>
            <CategoryName style={{backgroundColor: item.bgcl}}>{item.category_name}</CategoryName>
            <Title>{item.title}</Title>
          </Info>
        </InfoContainer>
        ))}
      </Wrapper>
    </Container>
  )
}

export default PostPopular