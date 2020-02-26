import styled from "styled-components"

const Main = styled.main`
  padding: 7rem 1.5rem 2rem;
`
const ButtonCenter = styled.div`
  display: flex;
  justify-content: center;
`
const QuestTitle = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  img {
    height: 15px;
    width: 15px;
  }
  p {
    font-weight: bold;
    color: #000;
    text-transform: initial;
  }
`
const QuestContent = styled.div`
  margin: 1rem 0 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 1.5rem;
  padding: 1.5rem;
  img {
    height: 250px;
    width: 100%;
    margin-left: 1rem;
    object-fit: cover;
  }
  h4 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    font-weight: bold;
  }
  p {
    color: #000;
  }
`
export { Main, ButtonCenter, QuestTitle, QuestContent }
