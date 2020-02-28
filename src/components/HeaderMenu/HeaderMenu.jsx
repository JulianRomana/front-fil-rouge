import React from "react"
import { useHistory } from "react-router-dom"
import {
  OpenedMenu,
  ItemsContainer,
  MenuLink,
  Logout,
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
    { logged: user, link: "/dashboard", label: "Tableau de bord" },
    {
      logged: true,
      link: "/home",
      label: "Agir pour l'environnment",
    },
    { logged: user, link: "/profile", label: "Mon profil" },
    { logged: user, link: "/user-quests", label: "Mes quêtes" },
    { logged: !user, link: "/login", label: "Se connecter" },
    { logged: !user, link: "/siginup", label: "S'inscrire" },
  ]

  return (
    <OpenedMenu>
      <ItemsContainer>
        {menu.map((menu, index) => {
          return (
            menu.logged && (
              <MenuLink to={menu.link} key={menu.label}>
                <Text>{menu.label}</Text>
              </MenuLink>
            )
          )
        })}
        {user && (
          <Logout onClick={logoutUser}>
            <Text>Déconnexion</Text>
          </Logout>
        )}
      </ItemsContainer>
    </OpenedMenu>
  )
}

export default HeaderMenu
