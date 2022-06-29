import React from "react";
import * as axios from 'axios'

const Users = (props) => {
  if (!props.users.length) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      console.log('response: ', response)
      props.setUsers(response.data.items)
    })
  }

  return <div>
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
