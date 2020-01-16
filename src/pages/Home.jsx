import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`

const Home = ({content,}) => {
  return (
    <Title> {content}</Title>
  )
}

Home.propTypes = {
  content: String,
}

export default Home