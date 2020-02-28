import styled from "styled-components"
import { green } from "../../assets/jsxStyles/Variables"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 2rem;
`
const Title = styled.h1`
  width: 100%;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 10rem;
  text-align: left;
`
const UserProfilePicture = styled.img`
  width: 12.8rem;
  height: 12.8rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
`
const Username = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
`
const UserInfoContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  align-items: center;
  margin: 3.5rem 0;
  font-size: 1.6rem;
  width: 100%;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 1.5rem;
  padding: 0.5rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background-color: ${green};
`
const DeleteAccount = styled.span`
  text-decoration: underline;
  font-size: 1.3rem;
  margin-top: 1.6rem;
  cursor: pointer;
`
export {
  Wrapper,
  Title,
  UserProfilePicture,
  Username,
  UserInfoContainer,
  UserInfo,
  Icon,
  DeleteAccount,
}
