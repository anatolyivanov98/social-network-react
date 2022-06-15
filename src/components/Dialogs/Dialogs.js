import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  const dialogElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  const messageElements = props.state.messages.map( message => <Message message={message.message} /> )

  const newMessageElement = React.useRef()

  const sendMessage = () => {
    const value = newMessageElement.current.value
    console.log('sendMessage: ', value)
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
              <textarea ref={newMessageElement} cols="30" rows="4"></textarea>
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
