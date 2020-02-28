import styled from "styled-components"
import { black } from "../../assets/jsxStyles/Variables"

const Container = styled.section`
  padding: 7rem 2rem 2rem;
`
const Title = styled.h1`
  color: ${black};
  text-align: left;
  font-weight: bold;
`
const List = styled.ul`
  margin-top: 2rem;
  li {
    padding: 3rem 2rem;
    border-radius: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.15);
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      font-size: 2rem;
      font-weight: bold;
    }
    img {
      height: 30px;
      width: 30px;
    }
  }
`

const Text = styled.p`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
`

export { Container, Title, List, Text }
