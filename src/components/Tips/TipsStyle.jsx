import styled from "styled-components"
import { white } from "../../assets/jsxStyles/Variables"

const Container = styled.div`
  margin-top: 2rem;
  background-color: #1b9a5a;
  padding: 1.5rem;
  border-radius: 1rem;
  color: ${white};
`
const Title = styled.h5`
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
`
const Description = styled.p`
  margin-top: 0.5rem;
`

export { Container, Title, Description }
