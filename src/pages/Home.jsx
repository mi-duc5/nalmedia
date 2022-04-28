import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Newhost from '../Components/Newhost'
import Posts from '../Components/Posts'

const Container = styled.div`
    width: 100%;
`

const Home = () => {
  return (
    <Container>
        <Header/>
        <Navbar/>
        <Newhost/>
        <Posts/>
        <Footer/>
    </Container>
  )
}

export default Home