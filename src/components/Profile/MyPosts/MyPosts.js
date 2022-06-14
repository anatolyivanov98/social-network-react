import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = () => {
  const postsData = [
    {id: 1, message: 'Hello, how are you', likeCount: 12},
    {id: 2, message: 'It`s my first post', likeCount: 23}
  ]

  return (
    <div className={classes.posts}>
      <h3>My posts</h3>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div>
        <button>Add new post</button>
      </div>

      <div>
        <Post message='Hello, how are you' likeCount="12"/>
        <Post message='It`s my first post' likeCount="124"/>
      </div>
    </div>
  )
}

export default MyPosts
