import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize)

  const pages = []

  for (let i = 1; i<=pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span key={p} onClick={() => {props.changePage(p)}} className={props.currentPage === p ? classes.selectedPage : ''}>{p}</span>
      })}
    </div>
    {
      props.users.map(user => <div key={user.id}>
          <div>
            <img src={user.photos.small} alt=""/>
            {user.followed
              ? <button onClick={() => {props.follow(user.id)}}>Follow</button>
              : <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>}
          </div>
          <div>
            <div>
              <p>{user.name}</p>
              <p>{user.status}</p>
            </div>
            <div>
              <span>{"user.location.city"}</span>
              <span>{"user.location.country"}</span>
            </div>
          </div>
        </div>
      )
    }
  </div>
}

export default Users
