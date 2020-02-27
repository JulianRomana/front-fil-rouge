import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Button from "../components/Button/Button"
import Popup from "../components/Popup/Popup"
import TrashIcon from "../assets/images/trash.svg"
import { axiosGet, axiosPost } from "../lib/axios"
import {
  ButtonCenter,
  Container,
  Content,
  Title,
  SubTitle,
} from "./pagesStyle/QuestStyle"

const QuestPage = () => {
  const [isClosed, setIsClosed] = useState(false)
  const [data, setData] = useState({})
  const { id } = useParams()
  const user = JSON.parse(localStorage.getItem("user"))

  const fetchData = async id => {
    const results = await axiosGet(`api/quests/${id}`)

    setData(results)
  }

  const addQuest = async () => {
    try {
      await axiosPost("api/user_quests", {
        userId: `/api/users/${user.id}`,
        questId: `/api/quests/${id}`,
        Status: "active",
        date: new Date(),
      })
    } catch (err) {
      console.error("add user quest error", err)
    }
  }

  useState(() => {
    fetchData(id)
  }, [])

  return (
    <>
      <Container>
        <Title>{data.title}</Title>
        <SubTitle>
          <img src={TrashIcon} alt="Trash" />
          <p>{data.category}</p>
        </SubTitle>
        <Content>
          <img src={data.picture} alt="Quest" />
          <h4>{data.description}</h4>
        </Content>
        <ButtonCenter
          onClick={() => {
            addQuest()
            setIsClosed(!isClosed)
          }}
        >
          <Button green content="Participer" />
        </ButtonCenter>
        <Popup isClosed={isClosed} setIsClosed={setIsClosed} />
      </Container>
    </>
  )
}

export default QuestPage
