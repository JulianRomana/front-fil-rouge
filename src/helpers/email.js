const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const validateEmail = email => {
  const isEmailValid = email.match(emailRegex)
  return isEmailValid && isEmailValid.length
}

export { validateEmail }
