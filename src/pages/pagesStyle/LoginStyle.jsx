import styled from "styled-components"
import { Link } from "react-router-dom"
import { grey, red } from "../../assets/jsxStyles/Variables"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding: 0 2rem 5rem;
`
const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 9rem;
`
const LoginExplaination = styled.p`
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
  grid-gap: 1.5rem;
  width: 100%;
  margin-bottom: 3.5rem;
`

const ToSignup = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10rem;
`

const SignUp = styled(Link)`
  text-decoration: underline;
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
  ToSignup,
  SignUp,
  ErrorMessage,
}
