import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { axiosGet } from "../lib/axios"
import MapBox from "../components/Map/MapBox"
import { black, green, white } from "../assets/jsxStyles/Variables"
import Tips from "../components/Tips/Tips"

const VelibPage = () => {
  const [geo, setGeo] = useState([])
  let [count, setCount] = useState(0)
  const [quest, setQuest] = useState([])
  const [showMap, setShowMap] = useState(true)
  const containerRef = useRef(null)

  const Header = styled.div`
    position: relative;
    z-index: 1;
    color: ${showMap ? white : black};
    &::before {
      display: ${showMap ? "block" : "none"};
      position: absolute;
      content: "";
      left: -1.5rem;
      background-color: ${green};
      width: calc(100% + 3rem);
      bottom: -1.5rem;
      height: 100vh;
      z-index: -1;
      border-radius: 0 0 3rem 3rem;
    }
  `

  const Container = styled.main`
    padding: 7rem 1.5rem 2rem;
  `
  const Title = styled.h1`
    text-align: left;
    font-weight: bold;
  `
  const SubTitle = styled.p`
    width: 70%;
    margin-top: 1rem;
    text-transform: uppercase;
  `
  const QuestList = styled.ul`
    margin-top: 1rem;

    li {
      padding: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 1rem;
      margin-bottom: 1rem;

      img {
        height: 60px;
        width: 60px;
      }

      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  `
  const Quest = styled.p`
    margin-top: 1.5rem;
    font-weight: bold;
    font-size: 1.6rem;
  `
  const QuestInfo = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 1.6rem;
      font-weight: bold;
      width: 80%;
    }
  `

  const fetchData = async () => {
    const results = await axiosGet("velib")
    const quests = await axiosGet("api/quests")
    const pollutionQuest = quests.filter(
      quest => quest.category === "Moins polluer",
    )
    const points = results.records.reduce((accumulator, data) => {
      if (data.fields.nbebike + data.fields.nbbike > 0) {
        accumulator.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: data.geometry.coordinates,
          },
          properties: {
            count: data.fields.nbebike + data.fields.nbbike,
            description: data.fields.station_name,
          },
        })
      }
      return accumulator
    }, [])

    const totalCount = results.records.reduce((accumulator, data) => {
      if (data.fields.nbebike + data.fields.nbbike > 0) {
        accumulator =
          Number(accumulator) + data.fields.nbebike + data.fields.nbbike
      }
      return accumulator
    }, [])

    setQuest(pollutionQuest)
    setCount(totalCount)
    setGeo(points)
  }

  useEffect(() => {
    fetchData()
    containerRef.current.previousSibling.style.color = showMap ? white : black
  }, [showMap])

  return (
    <Container ref={containerRef}>
      <Header>
        <Title>Moins polluer</Title>
        <SubTitle>Nombre de velibs disponible : {count}</SubTitle>
      </Header>
      <Tips
        title="Apprendre à faire le tri"
        description="Remplacer les consommables jetables par des alternatives plus durables."
      />
      <Quest>Quête(s) disponible(s)</Quest>
      <QuestList>
        {quest.map(quest => (
          <li key={quest.id}>
            <Link to={`/quest/${quest.id}`}>
              <QuestInfo>
                <h4>{quest.description}</h4>
              </QuestInfo>
              <img src={quest.picture} alt="Quest" />
            </Link>
          </li>
        ))}
      </QuestList>
      <MapBox geo={geo} showMap={showMap} setShowMap={setShowMap} />
    </Container>
  )
}

export default VelibPage
