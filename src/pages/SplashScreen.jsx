import React from 'react'
import logo from '../assets/images/illustrations/splashScreen.svg'
import Button from '../components/Button'
import { 
  Main,
  Wrapper, 
  Contents,
  Logo,
  Title,
  SecondSubtitle,
  StartParagraph, 
} from "./pagesStyle/SplashScreenStyle"

const SplashScreen = () => {

  return (
    <Main>
      <Wrapper>
        <Logo src={logo} alt="" />
        <Contents>
          <Title>Vivez vos JO 2024 d’une autre<br></br>manière</Title>
          <SecondSubtitle>Agissez afin de rendre<br></br>Paris meilleur</SecondSubtitle>
          <StartParagraph>Commencez dès maintenant !</StartParagraph>
        </Contents>
        <Button outline={false} content="COMMENCER"/>
      </Wrapper>
    </Main>
  )
}

export default SplashScreen
