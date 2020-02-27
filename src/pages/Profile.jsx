import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { axiosDelete } from "../lib/axios"
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

const Profile = () => {
  const history = useHistory()
  const [user, setUser] = useState(!!localStorage.getItem("user"))
  useEffect(() => {
    if (user) {
      setUser(JSON.parse(localStorage.getItem("user")))
    } else {
      history.push("/login")
    }
  }, [history, user])
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
      <Title>Mon Compte</Title>
      <UserProfilePicture src={ProfilePlaceholder} />
      <Username>{user.username}</Username>
      <UserInfoContainer>
        <UserInfo>
          <Icon>
            <img src={Medal} alt="" />
          </Icon>
          <span>Nombre d’activités effectuées :</span>
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
          <span>Inscrit depuis le</span>
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
