import React from "react"
import { useHistory } from "react-router-dom"
import LogoutIcon from "../../assets/images/icons/logout.svg"
import ProfileIcon from "../../assets/images/icons/profile.svg"
import QuestIcon from "../../assets/images/icons/quest.svg"
import SquaresIcon from "../../assets/images/icons/squares.svg"
import {
  OpenedMenu,
  ItemsContainer,
  MenuLink,
  Logout,
  Icon,
  Text,
} from "./HeaderMenuStyle"

const HeaderMenu = () => {
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem("user"))

  const logoutUser = () => {
    localStorage.removeItem("user")
    history.push("/login")
  }

  const menu = [
    {
      logged: user,

      link: "/dashboard",
      label: "Tableau de bord",
      icon: ProfileIcon,
    },
    {
      logged: true,
      link: "/home",
      label: "Agir pour l'environnment",
      icon: SquaresIcon,
    },
    {
      logged: user,

      link: "/profile",
      label: "Mon profil",
      icon: ProfileIcon,
    },
    {
      logged: user,

      link: "/user-quests",
      label: "Mes quêtes",
      icon: QuestIcon,
    },
    { logged: !user, link: "/login", label: "Se connecter", icon: QuestIcon },
    { logged: !user, link: "/siginup", label: "S'inscrire", icon: QuestIcon },
  ]

  return (
    <OpenedMenu>
      <ItemsContainer>
        {menu.map((menu, index) => {
          return (
            menu.logged && (
              <MenuLink to={menu.link} key={menu.label}>
                <Icon src={menu.icon} alt={menu.label} />
                <Text>{menu.label}</Text>
              </MenuLink>
            )
          )
        })}
        {user && (
          <Logout onClick={logoutUser}>
            <Icon src={LogoutIcon} alt="Logout Icon" />
            <Text>Déconnexion</Text>
          </Logout>
        )}
      </ItemsContainer>
    </OpenedMenu>
  )
}

export default HeaderMenu
