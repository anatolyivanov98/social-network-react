import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  const dialogElements = props.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
  const messageElements = props.dialogsPage.messages.map( message => <Message key={message.id} message={message.message} /> )

  const updateMessageBody = (e) => {
    props.updateMessageBody(e.target.value)
  }
  const sendMessage = () => {
    props.sendMessage()
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
              <textarea onChange={updateMessageBody} value={props.dialogsPage.newMessageBody}></textarea>
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
