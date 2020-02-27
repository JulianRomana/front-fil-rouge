import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding: 0 2rem;
`

const Title = styled.h1`
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
  padding: 2.1rem 1.2rem;
  width: 100%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
`
const QuestTitle = styled.span`
  font-weight: bold;
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
  NoQuests,
  QuestFlatCard,
  QuestTitle,
  QuestDescription,
  QuestImage,
  QuestContentContainer,
}
