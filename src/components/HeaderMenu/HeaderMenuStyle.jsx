import { Link } from "react-router-dom"
import styled from "styled-components"

const OpenedMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 3.6rem;
  background-color: #1b9a5a;
  color: #ffffff;
`
const ItemsContainer = styled.div`
  display: grid;
  grid-gap: 6.4rem;
`
const Environment = styled(Link)`
  display: flex;
  font-size: 2.4rem;
  color: #ffffff;
`
const Profile = styled(Link)`
  display: flex;
  font-size: 2.4rem;
  color: #ffffff;
`
const Quests = styled(Link)`
  display: flex;
  font-size: 2.4rem;
  color: #ffffff;
`
const Logout = styled.div`
  display: flex;
  font-size: 2.4rem;
`
const Icon = styled.img``
const ItemText = styled.span`
  margin-left: 4.8rem;
`
const ItemTextLarger = styled.span`
  margin-left: 5.6rem;
`

export {
  OpenedMenu,
  ItemsContainer,
  Environment,
  Profile,
  Quests,
  Logout,
  Icon,
  ItemText,
  ItemTextLarger,
}
