import React from "react"
import PropTypes from "prop-types"
import ValidIcon from "../../assets/images/valid.svg"
import AddIcon from "../../assets/images/add.svg"
import CloseIcon from "../../assets/images/close.svg"
import {
  Box,
  CloseButton,
  Content,
  Icon,
  Container,
  Title,
  UserQuest,
} from "./PopupStyle"

const Popup = ({ isClosed, setIsClosed, title, icon }) => {
  return (
    <>
      {isClosed && (
        <Container>
          <Box>
            <CloseButton
              src={CloseIcon}
              alt="close"
              onClick={() => setIsClosed(!isClosed)}
            />
            <Icon src={icon === "add" ? AddIcon : ValidIcon} alt="icon" />
            <Content>
              <Title>{title}</Title>
              <UserQuest to="/user-quests">Voir mes quêtes</UserQuest>
            </Content>
          </Box>
        </Container>
      )}
    </>
  )
}

Popup.propTypes = {
  isClosed: PropTypes.bool,
  setIsClosed: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.string,
}

export default Popup
