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
    const clearedData = inputsValue
      .map(info => ({ [info.name]: info.value }))
      .reduce((accumulator, newVal) => {
        return (accumulator = { ...accumulator, ...newVal })
      }, {})

    localStorage.setItem("user", JSON.stringify(clearedData))
    if (inputsValue.length < 4) return
    try {
      await axiosPost("users", clearedData)
      history.push("dashboard")
      console.log("user Created")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Wrapper>
      <Title>Créer mon compte</Title>
      <Subtitle>Plein de features vous attends</Subtitle>
      <Form onSubmit={submitForm}>
        <InputsWrapper>
          <Input
            name="username"
            logo="label"
            label="Saisir mon pseudonyme"
            type="text"
            currentInputsValues={inputsValue}
            setInputValue={setInputValue}
          />
          <Input
            name="email"
            logo="email"
            label="Saisir e-mail"
            type="email"
            currentInputsValues={inputsValue}
            setInputValue={setInputValue}
          />
          <Input
            name="password"
            logo="password"
            label="Saisir mon mot de passe"
            type="password"
            currentInputsValues={inputsValue}
            setInputValue={setInputValue}
          />
          <Input
            name="confirm"
            logo="password"
            label="Confirmer mon mot de passe"
            type="password"
            currentInputsValues={inputsValue}
            setInputValue={setInputValue}
          />
        </InputsWrapper>
        <Signin>
          Vous avez un compte ?<SignInLink to="login">Me connecter</SignInLink>
        </Signin>
        <Button green content="S'inscrire" />
        <GuestLink to="/dashboard">Continuer en tant qu’inviter</GuestLink>
      </Form>
    </Wrapper>
  )
}

export default Signup
