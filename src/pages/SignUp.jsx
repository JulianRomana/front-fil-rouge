import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Button from "../components/Button/Button.jsx"
import Input from "../components/Input/Input.jsx"
import { axiosPost } from "../lib/axios"

import {
  Title,
  Wrapper,
  Subtitle,
  Form,
  Signin,
  InputsWrapper,
  SignInLink,
  GuestLink,
} from "./pagesStyle/SignupStyle"

const Signup = () => {
  const [inputsValue, setInputValue] = useState([])
  const history = useHistory()
  const submitForm = async e => {
    e.preventDefault()
    if (inputsValue.length < 4) return
    const clearedData = inputsValue
      .map(info => ({ [info.name]: info.value }))
      .reduce((accumulator, nextVal) => {
        return { ...accumulator, ...nextVal }
      }, {})
    await axiosPost("api/users", clearedData)
    localStorage.setItem("user", JSON.stringify(clearedData))
    history.push("dashboard")
  }

  return (
    <Wrapper>
      <Title>
        Créer mon <br /> compte
      </Title>
      <Subtitle>Plein de features vous attends</Subtitle>
      <Form onSubmit={submitForm}>
        <InputsWrapper>
          <Input
            name="username"
            logo="label"
            label="Saisir mon pseudonyme"
            type="text"
            currentInputValue={inputsValue}
            sendInputValue={setInputValue}
          />
          <Input
            name="email"
            logo="email"
            label="Saisir e-mail"
            type="email"
            currentInputValue={inputsValue}
            sendInputValue={setInputValue}
          />
          <Input
            name="password"
            logo="password"
            label="Saisir mon mot de passe"
            type="password"
            currentInputValue={inputsValue}
            sendInputValue={setInputValue}
          />
          <Input
            name="confirm"
            logo="password"
            label="Confirmer mon mot de passe"
            type="password"
            currentInputValue={inputsValue}
            sendInputValue={setInputValue}
          />
        </InputsWrapper>
        <Signin>
          Vous avez un compte ?<SignInLink to="login">Me connecter</SignInLink>
        </Signin>
        <Button onClick={submitForm} green content="S'inscrire" />
        <GuestLink to="/dashboard">Continuer en tant qu’inviter</GuestLink>
      </Form>
    </Wrapper>
  )
}

export default Signup
