import React from "react"
import styled from "styled-components"
import Button from "../components/Button/Button"
import TrashIcon from "../assets/images/trash.svg"
import QuestImage from "./../assets/images/quest.png"
import { Title } from "./pagesStyle/SignupStyle"

const Environment = () => {
  const Main = styled.main`
    padding: 7rem 1.5rem 2rem;
  `
  const SubTitle = styled.p`
    margin-top: 1rem;
    color: rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
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
      margin-bottom: 0.5rem;
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

  return (
    <Main>
      <Title>Faire le tri</Title>
      <SubTitle>X ème jour des épreuves</SubTitle>
      <QuestTitle>
        <img src={TrashIcon} alt="Trash icon" />
        <p>Les déchets</p>
      </QuestTitle>
      <QuestContent>
        <img src={QuestImage} alt="" />
        <h4>Faire le tri de vos déchets</h4>
        <p>Lieu : N importe où.</p>
      </QuestContent>
      <ButtonCenter>
        <Button green content="Participer" />
      </ButtonCenter>
    </Main>
  )
}

export default Environment
