import React, { useState, useRef } from "react"
import propTypes from "prop-types"
import { Wrapper, Img, Input } from "./InputStyle"
import email from "../../assets/images/email.svg"
import label from "../../assets/images/label.svg"
import { CSSTransition } from "react-transition-group"

const getLogo = logoName => {
  switch (logoName) {
    case "email":
      return email
    case "label":
      return label
    default:
      return null
  }
}

const CustomInput = ({ type, logo, label }) => {
  const [focus, setFocus] = useState(false)
  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.current.focus()
    setFocus(true)
  }

  const handleBlur = () => {
    const {
      current: { value },
      current,
    } = inputRef

    if (value) return
    current.blur()
    setFocus(false)
  }

  return (
    <Wrapper>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        classNames="fade-out"
        timeout={10}
        in={!focus}
      >
        <Img src={getLogo(logo)} alt="" />
      </CSSTransition>
      <Input
        ref={inputRef}
        onBlur={handleBlur}
        onFocus={handleFocus}
        type={type}
        placeholder={label}
      />
    </Wrapper>
  )
}

CustomInput.propTypes = {
  type: propTypes.string,
  logo: propTypes.string,
  label: propTypes.string,
}

export default CustomInput
