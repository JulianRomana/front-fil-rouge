import styled from 'styled-components'

const setSpacing = () => {
  if (hasMenu && !hasNav) return 'flex-end'
  else if (!hasMenu && hasNav) return 'space-between'
  else if (hasMenu && hasNav) return 'space-between'
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

export {
  Wrapper,
  IconsWrapper,
  BackIcon,
  HomeIcon,
  Menu,
}