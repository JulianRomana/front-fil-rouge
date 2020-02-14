import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrapper = styled.section`
  padding: 5rem 1rem 2rem;
`
const Title = styled.h1`
  color: #000000;
  text-align: left;
  font-weight: bold;
`
const Subtitle = styled.p`
  color: #bfbfbf;
  font-weight: normal;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2rem 0 0 0;
`

const InputsWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
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
const GuestLink = styled(Link)`
  text-decoration: underline;
  color: #000000;
  text-transform: uppercase;
  margin: 2rem 0 0;
`

export {
  Wrapper,
  Title,
  Subtitle,
  Form,
  InputsWrapper,
  Signin,
  SignInLink,
  GuestLink,
}
