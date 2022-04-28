import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logo-NAL.jpg'

const Container = styled.div`
    display: flex;
    border-top: 2px solid black;

    @media only screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`

const Image = styled.img`
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100px;
    }
`

const Wrapper = styled.div`
    flex: 8;
    margin: 30px 0px 0px 20px;

    @media only screen and (max-width: 480px) {
       margin: 20px 0 0;
       text-align: center;
    }
`

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;

    @media only screen and (max-width: 480px) {
        font-size: 20px;
    }
`

const Content = styled.p`
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;

    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
`

const Address = styled.div`
    font-size: 16px;
    color: #666;
    margin: 10px 0;

    @media only screen and (max-width: 480px) {
        font-size: 12px;
        margin: 5px 0;
    }
`

const Phone = styled.div`
    font-size: 16px;
    color: #666;
    margin: 10px 0;

    @media only screen and (max-width: 480px) {
        font-size: 12px;
        margin: 5px 0;
    }
`

const Email = styled.div`
    font-size: 16px;
    color: #666;
    margin: 10px 0;

    @media only screen and (max-width: 480px) {
        font-size: 12px;
        margin: 5px 0;
    }
`


const Footer = () => {
  return (
    <Container>
        <Image src={Logo}/>
        <Wrapper>
            <Title>NAL MEDIA ベトナムオフショア開発にまつわる情報を提供します</Title>
            <Content>このサイトは、ベトナムにおけるオフショア開発の状況、ベトナムと日本の協力関係、およびテクノロジーに関する最新のニュースを更新し、NALの人々とお客様のストーリーを投稿しております。</Content>
            <Address>住所：3F, 84 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam</Address>
            <Phone>電話番号：(+84)243-787-8654</Phone>
            <Email>メールアドレス：info@nal.vn</Email>
        </Wrapper>
    </Container>
  )
}

export default Footer