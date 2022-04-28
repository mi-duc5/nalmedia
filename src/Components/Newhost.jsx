import React from 'react'
import styled from 'styled-components'
import H5 from '../img/5.jpg'
import H2 from '../img/2.jpg'
import H3 from '../img/3.jpg'


const Container = styled.div`
    padding: 20px 0;
    height: 700px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`

const Left = styled.div`
    position: relative;
    flex: 8;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 30px;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 480px) {
        padding-right: 0;
        width: 100%;
        margin-bottom: 30px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    cursor: pointer;

`


const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 80%;
    cursor: pointer;

`

const Info = styled.div`
    background-color: white;
    padding: 20px;
`

const CategoryName = styled.p`
    background-color: red;
    width: 120px;
    font-size: 16px;
    text-align: center;
    padding: 5px;
    margin-left: 30px;
    color: white;
`

const Right = styled.div`
    flex: 4;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const RightTop = styled.div`
    position: relative;
    margin-bottom: 15px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RightBottom = styled.div`
    position: relative;
    margin-top: 15px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Title = styled.h3`
    color: black;
    font-size: 20px;
`

const Content = styled.p`
    font-size: 16px;
    color: #888;
    overflow: hidden;
    text-indent: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

const Date = styled.span`
    color: black;
    font-size: 16px;    
`

const Author = styled.span`
    color: black;
    font-size: 16px;
`



const Newhost = () => {
  return (
    <Container>
        <Left>
            <Image src={H5} />
            <Wrapper>
                <CategoryName>HOT NEWS</CategoryName>   
                <Info>
                    <Title>スクラムチェックリスト</Title>
                    <Content>スクラムマスターになることを目指しているあなた、またはプロのスクラムマスターになるための最初の一歩を踏み出しているあなたも、NALのSEのTran Duy Truongによる以下の記事でスクラムマストターが何をすべきか、仕事の概要を説明られます。</Content>
                    <Author>Admin, </Author>
                    <Date>October 28, 2020</Date>
                </Info>
            </Wrapper>
        </Left>
        <Right>
            <RightTop>
                <Image src={H2} />
                <Wrapper>
                    <CategoryName style={{backgroundColor: 'violet'}}>TOP VIEWED</CategoryName>   
                    <Info>
                        <Title>スクラムチェックリスト</Title>
                        <Content>現在ベトナムと日本は政治経済共に良好な関係を築いており、ベトナム オフショア 会社から...</Content>
                        <Author>Admin, </Author>
                        <Date>October 27, 2020</Date>
                    </Info>
                </Wrapper>
            </RightTop>
            <RightBottom>
                <Image src={H3} />
                <Wrapper>
                    <CategoryName style={{backgroundColor: 'blue'}}>TOP VIEWED</CategoryName>   
                    <Info>
                        <Title>スクラムチェックリスト</Title>
                        <Content>オフショア市場の魅力を求め、多くのテクノロジー企業がソフトウェアのアウトソーシングに目...</Content>
                        <Author>Admin, </Author>
                        <Date>October 14, 2020</Date>
                    </Info>
                </Wrapper>
            </RightBottom>
        </Right>
    </Container>
  )
}

export default Newhost