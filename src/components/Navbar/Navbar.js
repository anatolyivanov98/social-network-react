import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <nav>
        <div className={classes.item}>
          <NavLink to="/profile" className={({ isActive }) => isActive ? classes.active : undefined }>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs" className={({ isActive }) => isActive ? classes.active : undefined }>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/users" className={({ isActive }) => isActive ? classes.active : undefined }>Users</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/news" className={({ isActive }) => isActive ? classes.active : undefined }>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" className={({ isActive }) => isActive ? classes.active : undefined }>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" className={({ isActive }) => isActive ? classes.active : undefined }>Settings</NavLink>
        </div>
      </nav>
      <div>
        <h3 className={classes.friendsTitle}>Friends</h3>
        <div className={classes.friendsBlock}>
          <div className={classes.friendsItem}>
            <img className={classes.friendsIcon} src="" alt=""/>
            <p className={classes.friendsName}>Andrew</p>
          </div>
          <div className={classes.friendsItem}>
            <img className={classes.friendsIcon} src="" alt=""/>
            <p className={classes.friendsName}>Sasha</p>
          </div>
          <div className={classes.friendsItem}>
            <img className={classes.friendsIcon} src="" alt=""/>
            <p className={classes.friendsName}>Dima</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
