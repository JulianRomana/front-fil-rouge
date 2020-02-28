import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import styled from "styled-components"

const QuestList = ({ totalActiveQuest }) => {
  const QuestList = styled.ul`
    margin-top: 1rem;
    & > p {
      padding: 2rem;
      text-align: center;
    }
  `
  const Item = styled.li`
    padding: 1rem 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
    margin-bottom: 1rem;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: bold;
      }
      img {
        height: 80px;
        width: 80px;
        object-fit: cover;
      }
    }
  `

  return (
    <QuestList>
      {totalActiveQuest.length !== 0 ? (
        <>
          {totalActiveQuest.map(({ questId }) => (
            <Item key={questId.id}>
              <Link to="">
                <p>{questId.description}</p>
                <img src={questId.picture} alt="Quest" />
              </Link>
            </Item>
          ))}
        </>
      ) : (
        <p>Vous n&#39;avez aucune quête en cours.</p>
      )}
    </QuestList>
  )
}

QuestList.propTypes = {
  totalActiveQuest: PropTypes.array,
}

export default QuestList
