import React from "react"
import PropTypes from "prop-types"
import { Container, Description, Title } from "./TipsStyle"

const Tips = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

Tips.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
export default Tips
