import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`

  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Dialogs = (props) => {
  const dialogsData = [
    {id: 1, name: 'Tolya'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Serega'},
    {id: 4, name: 'Shamil'},
    {id: 5, name: 'Kolya'}
  ]

  const messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'What is your name'},
  ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
              <DialogItem name='Tolya' id='1' />
              <DialogItem name='Nikita' id='2' />
              <DialogItem name='Serega' id='3' />
              <DialogItem name='Shamil' id='4' />
              <DialogItem name='Kolya' id='5' />
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you</div>
                <div className={classes.message}>What is your name</div>
            </div>
        </div>
    )
}

export default Dialogs
