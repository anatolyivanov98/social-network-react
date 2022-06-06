import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <a href="src/components/Navbar/Navbar">Profile</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar">Messages</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar">News</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar">Music</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar">Settings</a>
      </div>
    </nav>
  )
}

export default Navbar