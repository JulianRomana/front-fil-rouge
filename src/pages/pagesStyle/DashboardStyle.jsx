import styled from "styled-components"

const Main = styled.main`
  padding: 5rem 1rem 2rem;
`

const ButtonList = styled.ul`
  margin: 1rem 0 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;

  li {
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
    font-weight: bold;

    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 3;
    }
    &:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-child(3) {
      grid-area: 2 / 2 / 3 / 3;
    }

    p {
      margin: 10px 0 0 0;
    }

    a {
      display: block;
    }
  }
`

const Text = styled.p`
  margin: 1rem 0 0 0;
  font-weight: bold;
`

const Map = styled.div`
  margin: 0.5rem 0 0 0;
  height: 250px;
  border-radius: 10px;
`

export { Main, ButtonList, Text, Map }
