import styled from "styled-components"
import { Link } from "react-router-dom"
import { grey, red, black } from "../../assets/jsxStyles/Variables"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 7rem 2rem 2rem;
`
const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 9rem;
`
const LoginExplaination = styled.p`
  width: 80%;
  margin: auto;
  text-transform: uppercase;
  text-align: center;
  color: ${grey};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
`
const InputsWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: 100%;
  margin-bottom: 3.5rem;
`

const ToSignup = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 35%;
  text-transform: uppercase;
`
const GuestLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  color: ${black};
`
const SignUp = styled(Link)`
  text-decoration: underline;
  text-transform: uppercase;
`
const ErrorMessage = styled.span`
  margin-top: 2rem;
  color: ${red};
  font-size: 1.4rem;
`
export {
  Wrapper,
  Title,
  LoginExplaination,
  Form,
  InputsWrapper,
  GuestLink,
  ToSignup,
  SignUp,
  ErrorMessage,
}
