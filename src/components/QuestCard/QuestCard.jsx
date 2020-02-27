import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import Button from "../Button/Button"
import { axiosPut } from "../../lib/axios"
import Popup from "../Popup/Popup"
import { Main, Title, ButtonCenter, QuestContent } from "./QuestCardStyle"

const QuestCard = () => {
  const [isClosed, setIsClosed] = useState(false)
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
      <ButtonCenter
        onClick={() => {
          putQuest()
          setIsClosed(!isClosed)
        }}
      >
        <Button green content="Valider la quête" />
      </ButtonCenter>
      <Popup
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        title="Quête confirmée !"
      />
    </Main>
  )
}

export default QuestCard
