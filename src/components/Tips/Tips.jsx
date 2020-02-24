import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Tips = ({ title, description }) => {
  const Tips = styled.div`
    background-color: #1b9a5a;
    padding: 1.5rem;
    border-radius: 1rem;
  `

  const Title = styled.h5`
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: uppercase;
  `

  const Description = styled.p`
    color: #fff;
    margin-top: 0.5rem;
  `

  return (
    <Tips>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Tips>
  )
}

Tips.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
export { Tips }
