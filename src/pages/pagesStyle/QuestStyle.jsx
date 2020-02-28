import styled from "styled-components"
import { black } from "../../assets/jsxStyles/Variables"

const Container = styled.main`
  padding: 7rem 2rem 2rem;
`
const ButtonCenter = styled.div`
  display: flex;
  justify-content: center;
`
const SubTitle = styled.div`
  margin: 2rem 0;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  img {
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 1rem;
  }
  p {
    font-weight: bold;
    color: #000;
    font-size: 2.5rem;
    text-transform: initial;
  }
`
const Title = styled.h1`
  color: ${black};
  text-align: left;
  font-weight: bold;
`
const Content = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 1.5rem;
  padding: 2rem;
  img {
    height: 50vh;
    width: 100%;
    object-fit: contain;
  }
  h4 {
    font-size: 1.6rem;
    margin-top: 1.5rem;
    font-weight: bold;
  }
  p {
    color: #000;
  }
`
export { Container, ButtonCenter, Title, SubTitle, Content }
