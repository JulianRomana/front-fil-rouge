import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Title = styled.h1`
  color: red;
`

const Home = () => {
  return (
    <>
      <Title> Hello World</Title>
      <Button content="Ajouter a mes quêtes de mort"/>
    </>
  )
}

export default Home