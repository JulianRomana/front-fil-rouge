import styled from "styled-components"
import { Link } from "react-router-dom"
import { black, grey } from "../../assets/jsxStyles/Variables"

const Wrapper = styled.section`
  height: 100%;
  padding: 4rem 1.5rem 2rem;
`
const Title = styled.h1`
  color: ${black};
  text-align: left;
  font-weight: bold;
`
const Subtitle = styled.p`
  color: ${grey};
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
  color: ${black};
  font-size: 1.3rem;
`

const GuestLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  font-size: 1.3rem;
  text-align: center;
  text-decoration: underline;
  color: ${black};
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
