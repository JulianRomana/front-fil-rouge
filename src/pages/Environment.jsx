import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import TrashIcon from "../assets/images/trash.svg"
import PollutionIcon from "../assets/images/pollution.svg"
import HealthIcon from "../assets/images/health.svg"
import { Title } from "./pagesStyle/SignupStyle"

const Environment = () => {
  const Main = styled.main`
    padding: 7rem 1.5rem 2rem;
  `
  const SubTitle = styled.p`
    margin-top: 1rem;
    color: rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
  `

  const ButtonList = styled.ul`
    margin-top: 2rem;

    li {
      padding: 1.5rem;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;

      img {
        height: 40px;
        width: 40px;
      }

      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  `

  const links = [
    {
      icon: TrashIcon,
      label: "Les déchets",
      url: "/trash",
    },
    {
      icon: PollutionIcon,
      label: "Moins polluer",
      url: "/pollution",
    },
    {
      icon: HealthIcon,
      label: "Manger responsable",
      url: "/health",
    },
  ]

  return (
    <Main>
      <Title>Agir pour l’environnement</Title>
      <SubTitle>X ème jour des épreuves</SubTitle>
      <ButtonList>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>
              <p>{link.label}</p>
              <img src={link.icon} alt={link.label} />
            </Link>
          </li>
        ))}
      </ButtonList>
    </Main>
  )
}

export default Environment
