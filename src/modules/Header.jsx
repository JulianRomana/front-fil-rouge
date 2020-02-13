import React from "react"
import { useLocation, useHistory } from "react-router-dom"
import styled from "styled-components"
import BackHome from "../assets/images/back-button.svg"
import PropTypes from "prop-types"
import { IconsWrapper, BackIcon, Menu } from "./modulesStyle/HeaderStyle"

const Header = () => {
  const { goBack } = useHistory()
  const { pathname } = useLocation()

  const checkLocation = () => {
    if (pathname === "/" || pathname === "/dashboard") {
      return "hidden"
    } else {
      return "visible"
    }
  }

  const BackIcon = styled.div`
    visibility: ${checkLocation()};
    cursor: pointer;

    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  `

  return (
    <IconsWrapper>
      <BackIcon onClick={() => goBack()}>
        <img src={BackHome} alt="Back Icon" />
      </BackIcon>
      <Menu>Menu</Menu>
    </IconsWrapper>
  )
}

Header.propTypes = {
  hasBackButton: PropTypes.bool,
  hasNav: PropTypes.bool,
  hasMenu: PropTypes.bool,
  location: PropTypes.string,
}

export default Header
