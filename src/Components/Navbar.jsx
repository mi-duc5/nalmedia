import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 20px 0;
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`

const List = styled.ul`
    display: flex;
    justify-content: center;
    margin: 10px 0;
    padding: 0;
    list-style: none;
`

const ListItem = styled.li`
    margin-right: 60px;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <List>
            <ListItem>オフショア開発</ListItem>
            <ListItem>NALブログ</ListItem>
            <ListItem>ベトナム情報</ListItem>
            <ListItem>お問い合わせ</ListItem>
        </List>
    </Container>
  )
}

export default Navbar