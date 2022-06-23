import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  const dialogElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  const messageElements = props.messages.map( message => <Message message={message.message} /> )

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
              <textarea onChange={updateMessageBody} value={props.newMessageBody}></textarea>
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
