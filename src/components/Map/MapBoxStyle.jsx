import styled from "styled-components"
import { green } from "../../assets/jsxStyles/Variables"

const Map = styled.div`
  height: 100%;
`
const Button = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: 70px;
  width: 70px;
  background-color: ${green};
  border-radius: 50%;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

export { Map, Button }
