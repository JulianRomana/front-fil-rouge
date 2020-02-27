import React, { useState, useEffect } from "react"
import { useHistory } from "react"
import { axiosGet } from "../lib/axios"
import {
  Wrapper,
  Title,
  PendingQuests,
  DoneQuests,
  NoQuests,
  QuestFlatCard,
  QuestTitle,
  QuestsContainer,
  QuestContentContainer,
  QuestDescription,
  QuestImageContainer,
  QuestImage,
  QuestFlatCardFinished,
} from "./pagesStyle/QuestStyle"
import Button from "../components/Button/Button"

const QuestCard = () => {
  const history = useHistory()
  const [quests, setQuest] = useState()
  const getUserQuest = async () => {
    const { id } = JSON.parse(localStorage.getItem("user"))
    const response = await axiosGet(`api/user_quests`, {
      user_id: id,
    })
    setQuest(response)
  }

  useEffect(() => {
    getUserQuest()
  }, [setQuest])

  const questFlatCardActive = quest => {
    const { title, city, picture } = quest.questId
    return (
      <QuestFlatCard key={quest.id}>
        <QuestContentContainer>
          <QuestTitle>{title}</QuestTitle>
          <QuestDescription>Lieu: {city}</QuestDescription>
        </QuestContentContainer>
        <QuestImageContainer>
          <QuestImage src={picture}></QuestImage>
        </QuestImageContainer>
      </QuestFlatCard>
    )
  }

  const questFlatCardFinished = quest => {
    const { title, city, picture } = quest.questId
    return (
      <QuestFlatCardFinished key={quest.id}>
        <QuestContentContainer>
          <QuestTitle>{title}</QuestTitle>
          <QuestDescription> Lieu: {city}</QuestDescription>
        </QuestContentContainer>
        <QuestImageContainer>
          <QuestImage src={picture}></QuestImage>
        </QuestImageContainer>
      </QuestFlatCardFinished>
    )
  }
  const hasActiveQuests = () => {
    return quests.find(quest => quest.status === "active")
  }
  const hasFinishedQuests = () => {
    return quests.find(quest => quest.status === "finish")
  }
  return (
    <Wrapper>
      <Title>Mes quêtes</Title>

      {quests && quests.length ? (
        <>
          <QuestsContainer>
            {hasActiveQuests() && <PendingQuests>En cours</PendingQuests>}
            {quests.map(
              quest => quest.status === "active" && questFlatCardActive(quest),
            )}
          </QuestsContainer>
          <QuestsContainer>
            {hasFinishedQuests() && <DoneQuests>Terminées</DoneQuests>}
            {quests.map(
              quest =>
                quest.status === "finish" && questFlatCardFinished(quest),
            )}
          </QuestsContainer>
        </>
      ) : (
        <>
          <NoQuests>Vous n&apos;avez pas ajouté ni terminé de quêtes</NoQuests>
          <Button green content="VOIR LES QUETES"></Button>
        </>
      )}
    </Wrapper>
  )
}

export default QuestCard
