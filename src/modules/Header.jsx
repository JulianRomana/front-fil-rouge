import React, { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import styled from "styled-components"
import BackHomeIcon from "../assets/images/back-button.svg"
import HeaderMenu from "../components/HeaderMenu/HeaderMenu"
import { IconsWrapper } from "./modulesStyle/HeaderStyle"
import { CSSTransition } from "react-transition-group"
import { white, black } from "../assets/jsxStyles/Variables"

const Header = () => {
  const { goBack } = useHistory()
  const { pathname } = useLocation()
  const [isMenuOpened, setMenuStatus] = useState(false)
  const [currentLocation, setLocation] = useState(pathname)
  const closeMenuOnBack = () => {
    if (pathname !== currentLocation) {
      setMenuStatus(false)
      setLocation(pathname)
    }
  }

  useEffect(() => {
    closeMenuOnBack()
  })

  const showBackArrow = () => {
    if (
      pathname === "/" ||
      pathname === "/dashboard" ||
      pathname === "/signup" ||
      pathname === "/login"
    ) {
      return "hidden"
    } else {
      return "visible"
    }
  }

  const showMenu = () => {
    if (pathname === "/" || pathname === "/signup" || pathname === "/login") {
      return "hidden"
    } else {
      return "visible"
    }
  }

  const BackIcon = styled.div`
    visibility: ${showBackArrow()};
    cursor: pointer;

    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  `

  const Menu = styled.div`
    position: relative;
    z-index: 10;
    color: ${isMenuOpened ? white : black};
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: uppercase;
    visibility: ${showMenu()};
    cursor: pointer;
  `

  return (
    <IconsWrapper>
      <BackIcon onClick={goBack}>
        <img src={BackHomeIcon} alt="Back Icon" />
      </BackIcon>
      <CSSTransition
        unmountOnExit
        mountOnEnter
        in={isMenuOpened}
        timeout={800}
        classNames="fade-in"
      >
        <HeaderMenu />
      </CSSTransition>
      <Menu onClick={() => setMenuStatus(!isMenuOpened)}>
        {isMenuOpened ? "FERMER" : "MENU"}
      </Menu>
    </IconsWrapper>
  )
}

export default Header
