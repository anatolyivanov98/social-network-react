import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendNewMessage, setMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
  const state = props.store.getState().dialogsPage

  const dialogElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  const messageElements = state.messages.map( message => <Message message={message.message} /> )

  const newMessageBody = state.newMessageBody

  const updateMessageBody = (e) => {
    props.store.dispatch(setMessageBodyCreator(e.target.value))
  }
  const sendMessage = () => {
    props.store.dispatch(sendNewMessage())
  }

  return (
    <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          { dialogElements }
        </div>
        <div className={classes.messages}>
          { messageElements }
          <div>
            <div>
              <textarea onChange={updateMessageBody} value={newMessageBody}></textarea>
            </div>
            <div>
              <button onClick={sendMessage}>Send message</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dialogs
