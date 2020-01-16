import React from 'react' 
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({reversed, content,}) => {

  const StyledButton = styled.button`
    padding: 1rem .8rem;
    min-width: 19rem;
    height: 4.5rem;
    font-size: 1.8rem;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
  `

  const ConditionalButton = styled(StyledButton)`
    background-color: ${reversed ? '#20E3B2' : '#FFFFFF'};
    color: ${reversed ? '#FFFFFF' : 'black'};
    border: solid 1px ${reversed ? 'none' : '#000'};
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
