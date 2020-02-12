import React from "react"
import styled from "styled-components"
import backButton from "../assets/images/icons/backButton.svg"
import home from "../assets/images/icons/home.svg"
import menu from "../assets/images/icons/menu.svg"
import PropTypes from "prop-types"
import {
  IconsWrapper,
  BackIcon,
  HomeIcon,
  Menu
} from "./modulesStyle/HeaderStyle"

const Header = ({ hasNav, hasMenu }) => {
  const setSpacing = () => {
    if (hasMenu && !hasNav) return "flex-end"
    else if (!hasMenu && hasNav) return "space-between"
    else if (hasMenu && hasNav) return "space-between"
  }

  const showMenu = () => {
    if (hasMenu) {
      return (
        <Menu>
          <img src={menu} alt="Menu" />
        </Menu>
      )
    }
  }

  const showNav = () => {
    if (hasNav) {
      return (
        <>
          <BackIcon>
            <img src={backButton} alt="backButton" />
          </BackIcon>
          <HomeIcon>
            <img src={home} alt="home" />
          </HomeIcon>
        </>
      )
    }
  }

  const Wrapper = styled.header`
    position: fixed;
    display: flex;
    justify-content: ${setSpacing()};
    width: 100%;
    padding: 1rem 1.5rem;
  `
  return <Wrapper>{showMenu()}</Wrapper>
}

Header.propTypes = {
  hasBackButton: PropTypes.bool,
  hasNav: PropTypes.bool,
  hasMenu: PropTypes.bool
}

export default Header
