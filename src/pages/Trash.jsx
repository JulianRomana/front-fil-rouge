import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import ArrowIcon from "../assets/images/arrow.svg"
import { Title } from "./pagesStyle/SignupStyle"

const Trash = () => {
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
    font-size: 2rem;
    font-weight: bold;
  `
  const ButtonList = styled.ul`
    margin-top: 1.5rem;
    li {
      padding: 2rem 1.5rem;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 1rem;
      font-weight: bold;
      margin-bottom: 1rem;
      img {
        height: 25px;
        width: 25px;
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
      label: "Station de tri",
      url: "/station",
    },
    {
      label: "Green Walk",
      url: "/green-walk",
    },
    {
      label: "Réparer vos objets",
      url: "/repair",
    },
  ]

  return (
    <Main>
      <Title>Agir pour l’environnement</Title>
      <SubTitle>X ème jour des épreuves</SubTitle>
      <Text>Sélectionne le sujet qui t’intéresse</Text>
      <ButtonList>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>
              <p>{link.label}</p>
              <img src={ArrowIcon} alt="Arrow icon" />
            </Link>
          </li>
        ))}
      </ButtonList>
    </Main>
  )
}

export default Trash
