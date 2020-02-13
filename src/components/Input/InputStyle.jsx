import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  height: 5.5rem;
  width: 100%;
`
const Img = styled.img`
  position: absolute;
  top: 20px;
  left: 30px;
  width: 20px;
  pointer-events: none; 
  user-select: none;
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  color: #d9d9d9;
  background-color: none;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  font-size: 1.6rem;
`

const Label = styled.label`
  position: absolute;
  top: 18px;
  left: 70px;
  color: #d9d9d9;
  pointer-events: none;
  user-select: none;
`

export {
  Wrapper,
  Img,
  Input,
  Label,
}