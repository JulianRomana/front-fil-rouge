import styled from "styled-components"
import { Link } from "react-router-dom"
import { white, green } from "../../assets/jsxStyles/Variables"

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0%;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Box = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  border-radius: 1rem;
  background-color: ${white};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`
const CloseButton = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 25px;
  width: 25px;
`
const Content = styled.div`
  text-align: center;
`
const Icon = styled.img`
  padding: 3rem;
  border-radius: 50%;
  background-color: ${green};
`
const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
`
const UserQuest = styled(Link)`
  text-decoration: underline;
`

export { Container, Box, CloseButton, Content, Icon, Title, UserQuest }
