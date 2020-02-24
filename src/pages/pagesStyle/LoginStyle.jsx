import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 0 2rem;
`
const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`
const LoginExplaination = styled.p`
  text-align: center;
  color: #808080;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InputsWrapper = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  width: 100%;
`

const ToSignup = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const SignUp = styled(Link)`
  text-decoration: underline;
`

export {
  Wrapper,
  Title,
  LoginExplaination,
  Form,
  InputsWrapper,
  ToSignup,
  SignUp,
}
