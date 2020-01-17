import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/illustrations/splashScreen.svg'
import Button from '../components/Button'

const SplashScreen = () => {

  const Main = styled.main`
    height: 100vh;
    background-color: #20e3b2;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.5rem 1.5rem 3rem;
  `

  const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 3rem;
    color: white;
  `

  const Logo = styled.img`
    margin-bottom: 2.5rem;
    width: 23rem;
  `

  const Title = styled.h1`
    margin-bottom: 1.5rem;
    font-size: 3rem;

    @media (min-width: 400px) {
      font-size: 4rem;
    }
  `

  const SecondSubtitle = styled.h3`
    margin-bottom: 1.5rem;
  `

  const Excergue = styled.p`
    font-size: 1.7rem;

    @media (min-width: 400px) {
      margin-bottom: 7.5rem;
    }
  `

  return (
    <Main>
      <Wrapper>
        <Logo src={logo} alt="" />
        <Contents>
          <Title>Vivez vos JO 2024 d’une autre<br></br>manière</Title>
          <SecondSubtitle>Agissez afin de rendre<br></br>Paris meilleur</SecondSubtitle>
          <Excergue>Commencez dès maintenant !</Excergue>
        </Contents>
        <Button outline={false} content="COMMENCER"/>
      </Wrapper>
    </Main>
  )
}

export default SplashScreen
