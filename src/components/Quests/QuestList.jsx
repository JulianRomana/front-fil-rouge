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
    .content {
      display: flex;
      flex-direction: column;
    }
    p {
      font-weight: bold;
    }
    img {
      height: 25px;
      width: 25px;
    }
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `

  return (
    <QuestList>
      {totalActiveQuest.length !== 0 ? (
        <>
          {totalActiveQuest.map(({ questId }) => (
            <Item key={questId.id}>
              <Link to="">
                <div className="content">
                  <p>{questId.description}</p>
                  <span>Lieu: {questId.address}</span>
                </div>
              </Link>
            </Item>
          ))}
        </>
      ) : (
        <p>Vous n&#39;avez aucune quêtes en cours.</p>
      )}
    </QuestList>
  )
}

QuestList.propTypes = {
  totalActiveQuest: PropTypes.array,
}

export default QuestList
