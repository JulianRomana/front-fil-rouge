import React from 'react'
import styled from 'styled-components'
import backButton from '../assets/images/backButton.svg'
import home from '../assets/images/home.svg'

const Header = ({children,}) => {

  const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
  `

  const IconsWrapper = styled.div`
    display: grid;
    grid-gap: 2.5rem;
    grid-auto-flow: column;
    align-items: center;
  `

  const BackIcon = styled.div`
    width: 2rem;
  `

  const HomeIcon = styled.div`
    width: 2.4rem;
  `

  return ( 
    <Wrapper>
      <IconsWrapper>
        <BackIcon>
          <img src={backButton} alt="backButton"/>
        </BackIcon>
        <HomeIcon>
          <img src={home} alt="home"/>
        </HomeIcon>
      </IconsWrapper>
    </Wrapper>
  )
}

export default Header
