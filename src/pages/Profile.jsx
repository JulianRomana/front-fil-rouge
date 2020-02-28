import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { axiosDelete, axiosGet } from "../lib/axios"
import {
  Wrapper,
  Title,
  UserProfilePicture,
  Username,
  UserInfoContainer,
  UserInfo,
  Icon,
  DeleteAccount,
} from "./pagesStyle/ProfileStyle"
import Medal from "../assets/images/icons/medal.svg"
import Email from "../assets/images/icons/email.svg"
import Calendar from "../assets/images/icons/calendar.svg"
import Button from "../components/Button/Button"
import ProfilePlaceholder from "../assets/images/icons/profilePlaceholder.svg"
import moment from "moment"

const Profile = () => {
  const history = useHistory()
  const [finishedQuestCount, setFinishedQuestCount] = useState(0)
  const [user, setUser] = useState(!!localStorage.getItem("user"))

  const fetchData = async () => {
    const userQuestsResults = await axiosGet("api/user_quests", {
      user_id: user.id,
    })

    const getCountFinishedQuests = userQuestsResults.filter(
      data => data.status === "finish",
    ).length

    setFinishedQuestCount(getCountFinishedQuests)
  }
  useEffect(() => {
    fetchData()
    if (user) {
      setUser(JSON.parse(localStorage.getItem("user")))
    } else {
      history.push("/login")
    }
  }, [history])
  const toDashboard = () => {
    history.push("/dashboard")
  }

  const deleteUser = () => {
    axiosDelete(`api/users/${user.id}`)
    localStorage.removeItem("user")
    history.push("/login")
  }
  return (
    <Wrapper>
      <Title>Mon compte</Title>
      <UserProfilePicture src={ProfilePlaceholder} />
      <Username>{user.username}</Username>
      <UserInfoContainer>
        <UserInfo>
          <Icon>
            <img src={Medal} alt="" />
          </Icon>
          <span>
            Nombre d’activités effectuées : <b>{finishedQuestCount}</b>
          </span>
        </UserInfo>
        <UserInfo>
          <Icon>
            <img src={Email} alt="" />
          </Icon>
          <span>{user.email}</span>
        </UserInfo>
        <UserInfo>
          <Icon>
            <img src={Calendar} alt="" />
          </Icon>
          <span>
            Inscrit depuis le : <b>{moment().format("LL")}</b>
            {/* TODO: add created date of current user */}
          </span>
        </UserInfo>
      </UserInfoContainer>
      <span onClick={toDashboard}>
        <Button green content="VOIR MES STATISTIQUES" />
      </span>
      <DeleteAccount onClick={deleteUser}>SUPPRIMER MON COMPTE</DeleteAccount>
    </Wrapper>
  )
}

export default Profile
