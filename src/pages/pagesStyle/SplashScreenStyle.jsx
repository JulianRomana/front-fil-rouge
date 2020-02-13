import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Main = styled.main`
  height: 100vh;
  background-color: #1b9a5a;
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

const Skip = styled(Link)`
  margin-top: 1.5rem;
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
`

export {
  Main,
  Wrapper,
  Contents,
  Logo, 
  Title,
  SecondSubtitle,
  Skip,
}
