import styled from "styled-components"
import { green, white } from "../../assets/jsxStyles/Variables"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 7rem 2rem 2rem;
`
const Title = styled.h1`
  font-weight: bold;
  text-align: left;
`
const PendingQuests = styled.h2`
  margin-top: 3.4rem;
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
`
const QuestsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: 100%;
`
const DoneQuests = styled.h2`
  margin-top: 3.4rem;
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
`
const NoQuests = styled.p`
  text-align: center;
  margin: 5rem 0;
`
const QuestFlatCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.1rem 1.2rem;
  width: 100%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`
const QuestFlatCardFinished = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.1rem 1.2rem;
  width: 100%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  background-color: ${green};
  border-radius: 10px;
  color: ${white};
`
const QuestTitle = styled.span`
  font-weight: bold;
`
const QuestImageContainer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`
const QuestContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const QuestDescription = styled.span``
const QuestImage = styled.img``

export {
  Wrapper,
  Title,
  PendingQuests,
  DoneQuests,
  NoQuests,
  QuestsContainer,
  QuestFlatCard,
  QuestTitle,
  QuestDescription,
  QuestImage,
  QuestContentContainer,
  QuestImageContainer,
  QuestFlatCardFinished,
}
