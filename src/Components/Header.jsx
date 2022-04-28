import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Noto Serif JP', serif;

    @media only screen and (max-width: 480px) {
        width: 100%;
        margin: 0px 0 30px;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`
    position: absolute;
    margin: 20px;
    top: 0;
    left: 0;
    display: flex;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`

const LogoIcon = styled.div`
    font-size: 20px;
    margin-left: 20px;
    cursor: pointer; 
`

const LogoTitle = styled.div`
    font-size: 60px;
    font-weight: 500;
    color: black;

    @media only screen and (max-width: 480px) {
        font-size: 36px;
        font-weight: 500;
    }
`

const LogoContent = styled.div`
    font-size: 20px;
    color: #999;

    @media only screen and (max-width: 480px) {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
    }
`



const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <LogoIcon><i className="fa-brands fa-facebook-f"></i></LogoIcon>
                <LogoIcon> <i className="fa-brands fa-google"></i></LogoIcon>  
            </Logo>
            <LogoTitle>NAL MEDIA</LogoTitle>
        </Wrapper>
        <LogoContent>ベトナムオフショア開発にまつわる情報を提供します</LogoContent>
    </Container>
  )
}

export default Header