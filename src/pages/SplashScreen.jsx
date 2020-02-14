import React from "react"
import logo from "../assets/images/splash-screen.svg"
import Button from "../components/Button/Button.jsx"
import {
  Main,
  Wrapper,
  Contents,
  Logo,
  Title,
  SecondSubtitle,
  Skip,
} from "./pagesStyle/SplashScreenStyle"

const SplashScreen = () => {
  return (
    <Main>
      <Wrapper>
        <Contents>
          <Title>
            Vivez vos JO 2024 <br /> d’une autre manière
          </Title>
          <Logo src={logo} alt="" />
          <SecondSubtitle>
            Agissez afin de rendre Paris meilleur avec <b>Greenleaf</b>
          </SecondSubtitle>
        </Contents>
        <Button white full content="Commencez dès maintenant !" />
        <Skip to="/signup">Passer</Skip>
      </Wrapper>
    </Main>
  )
}

export default SplashScreen
