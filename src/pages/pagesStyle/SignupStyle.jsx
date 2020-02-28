import styled from "styled-components"
import { Link } from "react-router-dom"
import { black } from "../../assets/jsxStyles/Variables"

const Wrapper = styled.section`
  height: 100%;
  padding: 7rem 2rem;
`
const Title = styled.h1`
  color: ${black};
  text-align: left;
  font-weight: bold;
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
  grid-gap: 2rem;
  width: 100%;
`
const Signin = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0 20%;
  text-transform: uppercase;
`
const SignInLink = styled(Link)`
  text-decoration: underline;
  margin-top: 1rem;
  color: ${black};
`
const GuestLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  color: ${black};
`

export { Wrapper, Title, Form, InputsWrapper, Signin, SignInLink, GuestLink }
