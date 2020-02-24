import styled from "styled-components"
import { Link } from "react-router-dom"

const Main = styled.main`
  height: 100vh;
  background-color: #1b9a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 7.5rem;
`

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
`

const Logo = styled.img`
  max-width: 70%;
  margin: 1rem auto 1.5rem;
`

const SecondSubtitle = styled.h3`
  width: 80%;
  font-size: 2.2rem;
`

const Skip = styled(Link)`
  margin-top: 1.5rem;
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.7rem;
`

export { Main, Wrapper, Contents, Logo, Title, SecondSubtitle, Skip }
