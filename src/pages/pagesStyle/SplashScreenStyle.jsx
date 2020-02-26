import styled from "styled-components"
import { Link } from "react-router-dom"
import { white, green } from "../../assets/jsxStyles/Variables"

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem 2rem;
  height: 100vh;
  background-color: ${green};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  color: ${white};
  text-align: center;
`

const Title = styled.h1`
  margin-bottom: 3.5rem;
  font-size: 2.4rem;
  font-weight: bold;
`

const Logo = styled.img`
  margin: 1rem auto 1.5rem;
`

const SecondSubtitle = styled.h3`
  font-size: 2.2rem;
`

const Skip = styled(Link)`
  margin-top: 1.5rem;
  font-size: 1.7rem;
  color: ${white};
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
`

export { Main, Wrapper, Contents, Logo, Title, SecondSubtitle, Skip }
