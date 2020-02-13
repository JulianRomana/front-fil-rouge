import React from 'react' 
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyledButton } from './ButtonStyle'

const Button = ({ reversed, content }) => {

  const ConditionalButton = styled(StyledButton)`
    background-color: ${reversed ? '#1b9a5a' : '#fffff'};
    color: ${reversed ? '#ffffff' : '#00000'};
  `

  return (
    <ConditionalButton>
      { content }
    </ConditionalButton>
  )
}

Button.propTypes = {
  reversed: PropTypes.bool,
  content: PropTypes.string,
}

export default Button
