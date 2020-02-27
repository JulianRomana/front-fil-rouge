import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Container, List, Title } from "./pagesStyle/HomeStyle"

const HomePage = ({ routes }) => {
  return (
    <Container>
      <Title>Agir pour l’environnement</Title>
      <List>
        {routes.map(({ category }, index) => (
          <li key={index}>
            <Link to={category.link}>
              <p>{category.label}</p>
              <img src={category.icon} alt={category.label} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  )
}

HomePage.propTypes = {
  routes: PropTypes.array,
}

export default HomePage
