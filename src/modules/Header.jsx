import React, { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import styled from "styled-components"
import BackHomeIcon from "../assets/images/back-button.svg"
import HeaderMenu from "../components/HeaderMenu/HeaderMenu"

import { IconsWrapper } from "./modulesStyle/HeaderStyle"
import { CSSTransition } from "react-transition-group"

const Header = () => {
  const { goBack } = useHistory()
  const { pathname } = useLocation()
  const [isMenuOpened, setMenuStatus] = useState(false)
  const [currentLocation, setLocation] = useState(pathname)
  useEffect(() => {
    if (pathname !== currentLocation) {
      setMenuStatus(false)
      setLocation(pathname)
    }
  })
  const showBackArrow = () => {
    if (
      pathname === "/" ||
      pathname === "/dashboard" ||
      pathname === "/signup" ||
      pathname === "/environment"
    ) {
      return "hidden"
    } else {
      return "visible"
    }
  }

  const showMenu = () => {
    if (pathname === "/" || pathname === "/signup") {
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
    color: ${isMenuOpened ? "#ffffff" : "#000000"};
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
