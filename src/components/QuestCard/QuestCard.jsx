import React from "react"
import { useLocation } from "react-router-dom"
import Button from "../Button/Button"
import { axiosPut } from "../../lib/axios"
import { Main, Title, ButtonCenter, QuestContent } from "./QuestCardStyle"

const QuestCard = () => {
  const quest = useLocation()
  const { id: userQuestId } = quest.state.quest
  const { title, picture, city } = quest.state.quest.questId
  const putQuest = () => {
    axiosPut(`api/user_quests/${userQuestId}`, {
      date: new Date(),
      Status: "finish",
    })
  }
  return (
    <Main>
      <Title>{title}</Title>
      <QuestContent>
        <img src={picture} alt="" />
        <h4>{title}</h4>
        <p>Lieu : {city}</p>
      </QuestContent>
      <ButtonCenter onClick={putQuest}>
        <Button green content="Valider la quête" />
      </ButtonCenter>
    </Main>
  )
}

export default QuestCard
