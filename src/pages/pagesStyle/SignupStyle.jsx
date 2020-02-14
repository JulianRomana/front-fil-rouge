import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrapper = styled.section`
  height: 100vh;
  padding: 4rem 2rem 2rem;
`
const Title = styled.h1`
  color: #000000;
  text-align: left;
`
const Subtitle = styled.h3`
  color: #bfbfbf;
  font-size: 1.4rem;
  font-weight: normal;
  text-align: left;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6rem;
`

const InputsWrapper = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  width: 100%;
`

const Signin = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem 0 3rem;
  text-transform: uppercase;
`

const SignInLink = styled(Link)`
  text-decoration: underline;
  color: #000000;
`

export { Wrapper, Title, Subtitle, Form, InputsWrapper, Signin, SignInLink }
