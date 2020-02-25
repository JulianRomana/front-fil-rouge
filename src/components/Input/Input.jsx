import React, { useState, useRef } from "react"
import propTypes from "prop-types"
import { Wrapper, Img, Input, Label } from "./InputStyle"
import email from "../../assets/images/email.svg"
import label from "../../assets/images/label.svg"
import password from "../../assets/images/icons/password.svg"
import { CSSTransition } from "react-transition-group"
import { validateEmail } from "../../helpers/email"

const getLogo = logoName => {
  const logos = {
    email,
    label,
    password,
  }
  return logos[logoName]
}

const CustomInput = ({
  name,
  type,
  logo,
  label,
  currentInputValue,
  sendInputValue,
}) => {
  const [focus, setFocus] = useState(false)
  const [oldInputVal, setOldInputVal] = useState(false)
  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.current.focus()
    setFocus(true)
  }

  const handleBlur = () => {
    const { current } = inputRef

    if (current.value.length) return
    current.blur()
    setFocus(false)
  }

  const onInputValueChange = () => {
    const {
      current: { value },
      current,
    } = inputRef

    if (value && oldInputVal !== value) {
      if (current.type === "email" && !validateEmail(value)) return
      const clearedData = currentInputValue.filter(
        userData => userData.name !== name,
      )
      sendInputValue([
        ...clearedData,
        {
          name,
          value,
        },
      ])
      setOldInputVal(value)
      return
    }
  }

  return (
    <Wrapper>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        classNames="fade-in"
        timeout={100}
        in={!focus}
      >
        <>
          <Img src={getLogo(logo)} alt="" />
          <Label>{label}</Label>
        </>
      </CSSTransition>
      <Input
        ref={inputRef}
        onBlur={handleBlur}
        onFocus={handleFocus}
        type={type}
        onChange={onInputValueChange}
      />
    </Wrapper>
  )
}

CustomInput.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  logo: propTypes.string,
  label: propTypes.string,
  currentInputValue: propTypes.any,
  sendInputValue: propTypes.func,
}

export default CustomInput
