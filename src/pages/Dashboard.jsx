import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import mapboxgl from "mapbox-gl"
import Button from "../components/Button/Button"
import ThemeIcon from "../assets/images/theme.svg"
import QuestIcon from "../assets/images/quest.svg"
import AccountIcon from "../assets/images/account.svg"
import { Title } from "./pagesStyle/SignupStyle"

const Dashboard = () => {
  const Main = styled.main`
    padding: 5rem 1rem 2rem;
  `

  const ButtonList = styled.ul`
    margin: 1rem 0 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;

    li {
      padding: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 1rem;
      font-weight: bold;

      &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
      }
      &:nth-child(2) {
        grid-area: 2 / 1 / 3 / 2;
      }
      &:nth-child(3) {
        grid-area: 2 / 2 / 3 / 3;
      }

      p {
        margin: 10px 0 0 0;
      }

      a {
        display: block;
      }
    }
  `

  const Map = styled.div`
    margin: 1rem 0 0 0;
    height: 250px;
    border-radius: 10px;
  `

  const links = [
    {
      icon: ThemeIcon,
      label: "Agir pour l'environnement",
      url: "/environment"
    },
    {
      icon: QuestIcon,
      label: "Mes quêtes",
      url: "/quests"
    },
    {
      icon: AccountIcon,
      label: "Mon profil",
      url: "/account"
    }
  ]

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [2.3514616, 48.8566969]
        },
        properties: {
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [2.3380277, 48.8611473]
        },
        properties: {
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
      }
    ]
  }

  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      minZoom: 10,
      center: [2.3514616, 48.8566969],
      accessToken: process.env.REACT_APP_MAPBOX_API
    })

    geojson.features.forEach(marker => {
      new mapboxgl.Marker()
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          !marker.properties.count
            ? new mapboxgl.Popup({ offset: 10 }).setHTML(
                `<h6>${marker.properties.title}</h6><p>${marker.properties.description}</p>`
              )
            : undefined
        )
        .addTo(map)
    })
  })

  return (
    <Main>
      <Title>Tableau de bord</Title>
      <ButtonList>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>
              <img src={link.icon} alt={link.label} />
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
      </ButtonList>
      <Map ref={mapContainer} />
      <Button content="Déconnexion" red full margin="1rem 0 0 0" />
    </Main>
  )
}

export default Dashboard
