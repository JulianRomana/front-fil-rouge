import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Input from "../components/Input/Input"
import Button from "../components/Button/Button"
import { axiosGet } from "../lib/axios"
import {
  Wrapper,
  Title,
  LoginExplaination,
  Form,
  InputsWrapper,
  ToSignup,
  SignUp,
  GuestLink,
  ErrorMessage,
} from "./pagesStyle/LoginStyle"

const Login = () => {
  const history = useHistory()
  if (localStorage.getItem("user")) history.push("/dashboard")
  const [inputsValue, setInputsValue] = useState([])
  const [hasErros, setHasErrors] = useState(false)

  const onLogin = async e => {
    e.preventDefault()
    if (inputsValue.length !== 2) return
    const clearedData = inputsValue
      .map(inputValue => {
        return { [inputValue.name]: inputValue.value }
      })
      .filter(inputValue => Object.keys(inputValue)[0] === "username")
    const params = {
      ...clearedData[0],
      page: 1,
    }

    const response = await axiosGet("api/users", params)
    if (response.length) {
      localStorage.setItem("user", JSON.stringify(response[0]))
      history.push("/dashboard")
    } else {
      setHasErrors(true)
    }
  }

  return (
    <Wrapper>
      <Title>Me connecter</Title>
      <LoginExplaination>
        En vous connectant vous retrouverez votre progression
      </LoginExplaination>
      <Form onSubmit={onLogin}>
        <InputsWrapper>
          <Input
            logo="label"
            label="Saisir mon pseudo"
            name="username"
            type="text"
            currentInputValue={inputsValue}
            sendInputValue={setInputsValue}
          />
          <Input
            logo="password"
            label="Saisir mon mot de passe"
            name="password"
            type="password"
            currentInputValue={inputsValue}
            sendInputValue={setInputsValue}
          />
        </InputsWrapper>
        <ToSignup>
          Vous n’avez pas de compte ?<SignUp to="/signup">M’inscrire</SignUp>
        </ToSignup>
        <Button onClick={onLogin} green content="Connexion" />
        <GuestLink to="/home">Continuer en tant qu’inviter</GuestLink>
        {hasErros && (
          <ErrorMessage>Mauvais mot de passe ou pseudo !</ErrorMessage>
        )}
      </Form>
    </Wrapper>
  )
}

export default Login
