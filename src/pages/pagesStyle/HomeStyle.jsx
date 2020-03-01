import styled from "styled-components"
import { black } from "../../assets/jsxStyles/Variables"

const Container = styled.main`
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
    padding: 1.8rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    img {
      height: 50px;
      width: 50px;
    }
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      font-size: 2rem;
    }
  }
`

export { Container, Title, List }
