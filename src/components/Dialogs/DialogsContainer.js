import React from "react";
import {sendNewMessage, setMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  const state = props.store.getState()

  const updateMessageBody = (value) => {
    props.store.dispatch(setMessageBodyCreator(value))
  }
  const sendMessage = () => {
    props.store.dispatch(sendNewMessage())
  }

  return (
    <Dialogs
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageBody={state.newMessageBody}
      updateMessageBody={updateMessageBody}
      sendMessage={sendMessage}
    />
  )
}

export default DialogsContainer
