import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 10%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  user-select: none;
  z-index: 9;
`
const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  color: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 10px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`

export { Wrapper, Img, Input }
