import React, { useState } from "react"
import Input from "../components/Input/Input"
import Button from "../components/Button/Button"
import {
  Wrapper,
  Title,
  LoginExplaination,
  Form,
  InputsWrapper,
  ToSignup,
  SignUp,
} from "./pagesStyle/LoginStyle"

const Login = () => {
  const [inputsValue, setInputsValue] = useState([])

  const onLogin = e => {
    e.preventDefault()
    console.log(inputsValue)
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
            name="email"
            type="email"
            currentInputsValues={inputsValue}
            setInputValue={setInputsValue}
          />
          <Input
            logo="password"
            label="Saisir mon mot de passe"
            name="password"
            type="password"
            currentInputsValues={inputsValue}
            setInputValue={setInputsValue}
          />
        </InputsWrapper>
        <ToSignup>
          Vous n’avez pas de compte ?<SignUp to="signup">M’inscrire</SignUp>
        </ToSignup>
        <Button onClick={onLogin} green content="Connexion" />
      </Form>
    </Wrapper>
  )
}

export default Login
