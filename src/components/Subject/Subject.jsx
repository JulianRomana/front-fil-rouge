import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import ArrowIcon from "../../assets/images/arrow.svg"
import { Container, Title, List, Text } from "./SubjectStyle"

const Subject = ({ themes }) => {
  return (
    <Container>
      <Title>Agir pour l’environnement</Title>
      <Text>Sélectionne le sujet qui t’intéresse</Text>
      <List>
        {themes.map((theme, index) => (
          <li key={index}>
            <Link to={theme.link}>
              <p>{theme.label}</p>
              <img src={ArrowIcon} alt="Arrow" />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  )
}

Subject.propTypes = {
  themes: PropTypes.array,
}

export default Subject
