import React from "react"
import { useHistory } from "react-router-dom"
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
  `

  const history = useHistory()

  const showQuest = quest => {
    history.push(`/user-quests/${quest.id}`, { quest })
  }

  return (
    <QuestList>
      {totalActiveQuest.length !== 0 ? (
        <>
          {totalActiveQuest.map(quest => (
            <Item key={quest.questId.id} onClick={() => showQuest(quest)}>
              <p>{quest.questId.description}</p>
              <img src={quest.questId.picture} alt="Quest" />
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
