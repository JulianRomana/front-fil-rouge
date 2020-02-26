import styled from "styled-components"

const Main = styled.main`
  padding: 7rem 1.5rem 2rem;
`
const SubTitle = styled.h2`
  margin-top: 2rem;
  font-weight: bold;
`
const MainDoughnut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const DoughnutList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export { Main, MainDoughnut, SubTitle, DoughnutList }
