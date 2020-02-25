import React from "react"
import LogoutIcon from "../../assets/images/icons/logout.svg"
import ProfileIcon from "../../assets/images/icons/profile.svg"
import QuestIcon from "../../assets/images/icons/quest.svg"
import SquaresIcon from "../../assets/images/icons/squares.svg"
import {
  OpenedMenu,
  ItemsContainer,
  Environment,
  Profile,
  Quests,
  Logout,
  Icon,
  ItemText,
  ItemTextLarger,
} from "./HeaderMenuStyle"

const HeaderMenu = () => {
  return (
    <OpenedMenu>
      <ItemsContainer>
        <Environment to="/environment">
          <Icon src={SquaresIcon} alt="squares icon" />
          <ItemText>AGIR POUR L’ENVIRONNEMENT</ItemText>
        </Environment>
        <Profile to="/profile">
          <Icon src={ProfileIcon} alt="" />
          <ItemText>MON PROFIL</ItemText>
        </Profile>
        <Quests to="/quest">
          <Icon src={QuestIcon} alt="" />
          <ItemTextLarger> MES QUÊTES</ItemTextLarger>
        </Quests>
        <Logout>
          <Icon src={LogoutIcon} alt="logout icon" />
          <ItemText>DÉCONNEXION</ItemText>
        </Logout>
      </ItemsContainer>
    </OpenedMenu>
  )
}

export default HeaderMenu
