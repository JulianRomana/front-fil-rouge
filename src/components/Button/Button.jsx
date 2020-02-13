import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./ButtonStyle"

const Button = ({ content, ...props }) => {
  return (
    <div
      className={`button
        ${props.white ? "button--white" : ""}
        ${props.green ? "button--green" : ""}
        ${props.red ? "button--red" : ""}
        ${props.full ? "button--full" : ""}
      `}
      style={{ margin: props.margin }}
    >
      {content}
    </div>
  )
}

Button.propTypes = {
  content: PropTypes.string,
  white: PropTypes.bool,
  green: PropTypes.bool,
  red: PropTypes.bool,
  full: PropTypes.bool,
  margin: PropTypes.string,
}

export default Button
