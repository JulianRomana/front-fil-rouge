import styled from "styled-components"
import { black, greyLighter } from "../../assets/jsxStyles/Variables"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 3rem;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  user-select: none;
  z-index: 9;
`
const Input = styled.input`
  width: 100%;
  padding: 1.6rem 1.6rem;
  color: ${black};
  border: 1px solid ${greyLighter};
  border-radius: 10px;
  font-size: 1.6rem;
  outline: none;
`

const Label = styled.label`
  position: absolute;
  top: 18px;
  left: 70px;
  color: ${greyLighter};
  pointer-events: none;
  user-select: none;
  font-size: 1.6rem;
`

export { Wrapper, Img, Input, Label }
