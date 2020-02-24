import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrapper = styled.section`
  height: 100%;
  padding: 5rem 1rem 2rem;
`
const Title = styled.h1`
  color: #000000;
  text-align: left;
  font-weight: bold;
`
const Subtitle = styled.p`
  color: #bfbfbf;
  font-size: 1.3rem;
  font-weight: normal;
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
  grid-gap: 1rem;
  width: 100%;
`

const Signin = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem 0 30%;
  text-transform: uppercase;
  font-size: 1.3rem;
`

const SignInLink = styled(Link)`
  text-decoration: underline;
  color: #000000;
  font-size: 1.3rem;
`

const GuestLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  font-size: 1.3rem;
  text-align: center;
  text-decoration: underline;
  color: #000000;
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
