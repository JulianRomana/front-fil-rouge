import React, { useState, useEffect } from "react"
import propTypes from "prop-types"
import { axiosGet } from "../lib/axios"
import {
  Wrapper,
  Title,
  NoQuests,
  QuestFlatCard,
  QuestTitle,
  QuestDescription,
  QuestImage,
  QuestContentContainer,
} from "./pagesStyle/QuestStyle"
import Button from "../components/Button/Button"

const QuestCard = ({ title, image, city }) => {
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

  const questFlatCard = quest => {
    const { title, description, picture } = quest.questId
    return (
      <QuestFlatCard key={quest.id}>
        <QuestContentContainer>
          <QuestTitle>{title}</QuestTitle>
          <QuestDescription> {description}</QuestDescription>
        </QuestContentContainer>
        <QuestImage src={picture}></QuestImage>
      </QuestFlatCard>
    )
  }

  return (
    <Wrapper>
      <Title>Mes quêtes</Title>
      {quests && quests.length ? (
        quests.map(quest => questFlatCard(quest))
      ) : (
        <>
          <NoQuests>Vous n&apos;avez pas ajouté ni terminé de quêtes</NoQuests>
          <Button green content="VOIR TOUTES LES QUETES"></Button>
        </>
      )}
    </Wrapper>
  )
}

QuestCard.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  city: propTypes.string,
}
export default QuestCard
