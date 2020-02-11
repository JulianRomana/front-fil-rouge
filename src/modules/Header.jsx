import React from 'react'
import styled from 'styled-components'
import backButton from '../assets/images/icons/backButton.svg'
import home from '../assets/images/icons/home.svg'
import menu from '../assets/images/icons/menu.svg'
import PropTypes from 'prop-types'

const Header = ({hasNav, hasMenu}) => {

  const showMenu = () => {
    if (hasMenu) {
      return <Menu><img src={menu} alt="Menu"/></Menu> 
    }
  }


  const setSpacing = () => {
    if (hasMenu && !hasNav) return 'flex-end'
    else if (!hasMenu && hasNav) return 'space-between'
    else if (hasMenu && hasNav) return 'space-between'
  }

  const showNav = () => {
    if (hasNav) {
      return (
        <>
          <BackIcon>
            <img src={backButton} alt="backButton"/>
          </BackIcon>
          <HomeIcon>
            <img src={home} alt="home"/>
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

  const IconsWrapper = styled.div`
    display: grid;
    grid-gap: 2.5rem;
    grid-auto-flow: column;
    align-items: center;
  `

  const BackIcon = styled.div`
    width: 1.2rem;
  `

  const HomeIcon = styled.div`
    width: 2.4rem;
  `

  const Menu = styled.div`
    width: 3.3rem;
  `

  return ( 
    <Wrapper>
      <IconsWrapper>
        {showNav()}
      </IconsWrapper>
      {showMenu()}
    </Wrapper>
  )
}

Header.propTypes = {
  hasBackButton: PropTypes.bool,
  hasNav: PropTypes.bool,
  hasMenu: PropTypes.bool,
}

export default Header
