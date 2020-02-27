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

const Popup = ({ isClosed, setIsClosed }) => {
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
            <Icon src={AddIcon} alt="icon" />
            <Content>
              <Title>Quête ajoutée !</Title>
              <UserQuest to="">Voir mes quêtes</UserQuest>
              {/* TODO: add correct path */}
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
}

export default Popup
