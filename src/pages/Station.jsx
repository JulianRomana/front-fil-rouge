import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import mapboxgl from "mapbox-gl"
import { Title } from "./pagesStyle/SignupStyle"
import { Tips } from "./../components/Tips/Tips"
import QuestImage from "./../assets/images/quest.png"

const Dashboard = () => {
  const Main = styled.main`
    padding: 7rem 1.5rem 2rem;
  `

  const SubTitle = styled.p`
    margin-top: 0.25rem;
    color: rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
  `

  const Text = styled.p`
    margin-top: 1rem;
    font-weight: bold;
  `

  const MapInfo = styled.p`
    margin: 1rem 0;
    font-weight: bold;
  `

  const Map = styled.div`
    margin-top: 0.5rem;
    height: 400px;
    border-radius: 10px;
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

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [2.3514616, 48.8566969],
        },
        properties: {
          title: "Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [2.3380277, 48.8611473],
        },
        properties: {
          title: "Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      },
    ],
  }

  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      minZoom: 10,
      center: [2.3514616, 48.8566969],
      accessToken: process.env.REACT_APP_MAPBOX_API,
    })

    geojson.features.forEach(marker => {
      new mapboxgl.Marker()
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          !marker.properties.count
            ? new mapboxgl.Popup({ offset: 10 }).setHTML(
                `<h6>${marker.properties.title}</h6><p>${marker.properties.description}</p>`,
              )
            : undefined,
        )
        .addTo(map)
    })
  })

  return (
    <Main>
      <Title>Les déchets</Title>
      <SubTitle>X ème jour des épreuves</SubTitle>
      <Text>Stations de tri de déchets</Text>
      <Map ref={mapContainer} />
      <MapInfo>Nombre de station de tri de déchets : 219</MapInfo>
      <Tips
        title="Apprendre à faire le tri"
        description="Remplacer les consommables jetables par des alternatives plus durables."
      />
      <Quest>Quête(s) disponible(s)</Quest>
      <QuestList>
        <li>
          <Link to="/quest">
            <QuestInfo>
              <h4>Faire le tri de vos déchets</h4>
              <p>Lieu : N importe où.</p>
            </QuestInfo>
            <img src={QuestImage} alt="Quest Icon" />
          </Link>
        </li>
      </QuestList>
    </Main>
  )
}

export default Dashboard
