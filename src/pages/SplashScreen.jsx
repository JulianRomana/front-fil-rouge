import React from "react"
import logo from "../assets/images/illustrations/splashScreen.svg"
import Button from "../components/Button/Button.jsx"
import {
  Main,
  Wrapper,
  Contents,
  Logo,
  Title,
  SecondSubtitle,
  Skip
} from "./pagesStyle/SplashScreenStyle"

const SplashScreen = () => {
  return (
    <Main>
      <Wrapper>
        <Logo src={logo} alt="" />
        <Contents>
          <Title>
            Vivez vos JO 2024 d’une autre<br></br>manière
          </Title>
          <SecondSubtitle>
            Agissez afin de rendre<br></br>Paris meilleur
          </SecondSubtitle>
        </Contents>
        <Button outline={false} content="Commencez dès maintenant !" />
        <Skip to="/signup">IGNORER</Skip>
      </Wrapper>
    </Main>
  )
}

export default SplashScreen
