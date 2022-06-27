import React from "react";
import {sendNewMessage, setMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageBody: (value) => {
      dispatch(setMessageBodyCreator(value))
    },
    sendMessage: () => {
      dispatch(sendNewMessage())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
