import styled from "styled-components"
import { green } from "../../assets/jsxStyles/Variables"
import PinMarker from "../../assets/images/pin.svg"

const Map = styled.div`
  height: 100%;
  .marker--pin {
    width: 50px;
    height: 50px;
    background: url(${PinMarker}) center no-repeat;
    background-size: contain;
  }
  .marker--count {
    padding: 14px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    background-color: #1b9a5a;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: auto;
  }
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
