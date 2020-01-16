import React from 'react' 
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({reversed, content,}) => {

  const StyledButton = styled.button`
    padding: 0 .8rem;
    min-width: 19rem;
    height: 4.5rem;
    background-color: ${reversed ? '#20E3B2' : '#FFFFFF'};
    color: ${reversed ? '#FFFFFF' : 'black'};
    font-size: 1.8rem;
    border: solid 1px ${reversed ? 'none' : '#000'};
    border-radius: 5px;
    text-transform: uppercase;
`

  return (
    <StyledButton>
      { content }
    </StyledButton>
  )
}

Button.propType = {
  reversed: PropTypes.bool,
  content: PropTypes.string,
}

export default Button