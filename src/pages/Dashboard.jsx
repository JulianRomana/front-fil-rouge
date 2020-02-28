import React, { useState, useEffect } from "react"
import { axiosGet } from "../lib/axios"
import DoughnutList from "../components/Charts/DoughnutList"
import MainDoughnut from "../components/Charts/MainDoughnut"
import QuestList from "../components/Quests/QuestList"
import Graph from "../components/Charts/Graph"
import { Title } from "./pagesStyle/SignupStyle"
import { Main, SubTitle } from "./pagesStyle/DashboardStyle"

const DashboardPage = () => {
  const [mainDoughnutData, setMainDoughnutData] = useState({})
  const [doughnutDataList, setDoughnutDataList] = useState([])
  const [totalActiveQuest, setTotalActiveQuest] = useState([])
  const [totalFinishQuest, setTotalFinishQuest] = useState([])
  const user = JSON.parse(localStorage.getItem("user"))

  const fetchData = async () => {
    const questsResults = await axiosGet("api/quests")
    const userQuestsResults = await axiosGet("api/user_quests", {
      user_id: user.id,
    })

    const getCountFinishedQuests = userQuestsResults.filter(
      data => data.status === "finish",
    ).length

    const getCountFinishedQuestsByCategorie = category =>
      userQuestsResults.filter(
        data => data.status === "finish" && data.questId.category === category,
      ).length

    const getTotalCountQuestsByCategorie = category =>
      questsResults.filter(data => data.category === category).length

    const countTotalQuest = (finishedQuest, data) =>
      Math.round((finishedQuest / data) * 100)

    const reduceTotalQuestFromDoneQuest = totalFinishedQuest =>
      totalFinishedQuest === 100 ? 0 : 100 - totalFinishedQuest

    const totalQuestsDone = countTotalQuest(
      getCountFinishedQuests,
      questsResults.length,
    )

    const totalTrashQuestDone = countTotalQuest(
      getCountFinishedQuestsByCategorie("Déchets"),
      getTotalCountQuestsByCategorie("Déchets"),
    )

    const totalHealthQuestDone = countTotalQuest(
      getCountFinishedQuestsByCategorie("Manger responsable"),
      getTotalCountQuestsByCategorie("Manger responsable"),
    )

    const totalPollutionQuestDone = countTotalQuest(
      getCountFinishedQuestsByCategorie("Moins polluer"),
      getTotalCountQuestsByCategorie("Moins polluer"),
    )

    setDoughnutDataList([
      {
        name: "Les déchets",
        value: {
          a: totalTrashQuestDone,
          b: reduceTotalQuestFromDoneQuest(totalTrashQuestDone),
        },
      },
      {
        name: "Moins polluer",
        value: {
          a: totalPollutionQuestDone,
          b: reduceTotalQuestFromDoneQuest(totalPollutionQuestDone),
        },
      },
      {
        name: "Manger plus responsable",
        value: {
          a: totalHealthQuestDone,
          b: reduceTotalQuestFromDoneQuest(totalHealthQuestDone),
        },
      },
    ])

    setMainDoughnutData({
      a: totalQuestsDone,
      b: reduceTotalQuestFromDoneQuest(totalQuestsDone),
    })

    setTotalActiveQuest(
      userQuestsResults.filter(data => data.status === "active"),
    )
    setTotalFinishQuest(
      userQuestsResults.filter(data => data.status === "finish"),
    )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Main>
      <Title>Tableau de bord</Title>
      <SubTitle>Mes quêtes effectuées</SubTitle>
      <MainDoughnut mainDoughnutData={mainDoughnutData} />
      <DoughnutList doughnutDataList={doughnutDataList} />
      <SubTitle>Activités effectuées par jour</SubTitle>
      <Graph totalFinishQuest={totalFinishQuest} />
      <SubTitle>Mes quêtes en cours</SubTitle>
      <QuestList totalActiveQuest={totalActiveQuest} />
    </Main>
  )
}

export default DashboardPage
