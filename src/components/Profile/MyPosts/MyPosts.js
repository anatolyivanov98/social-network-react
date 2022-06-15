import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = (props) => {

  const postElements = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount}/> )

  const newPostElement = React.useRef()

  const addPost = () => {
    const value = newPostElement.current.value
    console.log('addPost', value)
  }

  return (
    <div className={classes.posts}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} cols="30" rows="4"></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add new post</button>
      </div>

      <div>
        { postElements }
      </div>
    </div>
  )
}

export default MyPosts
