import React from 'react'
import Button from '../components/Button/Button.jsx'
import Input from '../components/Input/Input.jsx'

import {
  Title,
  Wrapper,
  Subtitle,
  Form,
  Signin,
  InputsWrapper,
  SignInLink,
} from './pagesStyle/SignupStyle'

const Signup = () => {

  const submitForm = (e) => {
    e.preventDefault()
  }
  
  return ( 
    <Wrapper>
      <Title>Créer mon compte.</Title>
      <Subtitle>Plein de features vous attends</Subtitle>
      <Form onSubmit={submitForm}>
        <InputsWrapper>
          <Input logo="label" label="Saisir mon nom" type="text"></Input>
          <Input logo="label" label="Saisir mon prenom" type="text"></Input>
          <Input logo="email" label="Saisir e-mail" type="email"></Input>
          <Input logo="email" label="Saisir mon mot de passe" type="password"></Input>
        </InputsWrapper>
        <Signin>
          Vous avez un compte ?
          <SignInLink to="login">Me connecter</SignInLink>
        </Signin>
        <Button reversed content="S'inscrire" />
      </Form>

    </Wrapper>
  )
}

export default Signup
