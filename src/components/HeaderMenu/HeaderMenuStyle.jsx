import { Link } from "react-router-dom"
import styled from "styled-components"
import { green, white } from "../../assets/jsxStyles/Variables"

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
  background-color: ${green};
  color: ${white};
`
const ItemsContainer = styled.div`
  display: grid;
  grid-gap: 6.4rem;
`
const Environment = styled(Link)`
  display: flex;
  color: ${white};

  span {
    font-size: 2.4rem;
  }
`
const Profile = styled(Link)`
  display: flex;
  color: ${white};

  span {
    font-size: 2.4rem;
  }
`
const Quests = styled(Link)`
  display: flex;
  color: ${white};

  span {
    font-size: 2.4rem;
  }
`
const Logout = styled.div`
  display: flex;
  cursor: pointer;

  span {
    font-size: 2.4rem;
  }
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
