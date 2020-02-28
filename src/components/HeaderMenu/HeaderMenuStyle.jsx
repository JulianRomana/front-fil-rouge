import { Link } from "react-router-dom"
import styled from "styled-components"
import { green, white } from "../../assets/jsxStyles/Variables"

const OpenedMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 4rem;
  background-color: ${green};
  color: ${white};
  z-index: 10;
`
const ItemsContainer = styled.div`
  display: grid;
  grid-gap: 5rem;
  width: 100%;
`
const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
`
const Logout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Icon = styled.img`
  height: 40px;
  width: 40px;
`
const Text = styled.p`
  margin-left: 3.5rem;
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${white};
`

export { OpenedMenu, ItemsContainer, MenuLink, Logout, Icon, Text }
