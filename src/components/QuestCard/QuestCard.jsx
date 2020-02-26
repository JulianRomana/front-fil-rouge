import React from "react"
import propTypes from "prop-types"
import Button from "../components/Button/Button"
import TrashIcon from "../assets/images/trash.svg"
import { Title } from "./pagesStyle/SignupStyle"
import {
  Main,
  ButtonCenter,
  QuestTitle,
  QuestContent,
} from "./pagesStyle/QuestStyle"

const QuestCard = ({ title, image, city }) => {
  return (
    <Main>
      <Title>{title}</Title>
      <QuestTitle>
        <img src={TrashIcon} alt="Trash icon" />
        <p>Les déchets</p>
      </QuestTitle>
      <QuestContent>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>{city}</p>
      </QuestContent>
      <ButtonCenter>
        <Button green content="Participer" />
      </ButtonCenter>
    </Main>
  )
}

QuestCard.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  city: propTypes.string,
}
export default QuestCard
