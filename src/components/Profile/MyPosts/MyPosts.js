import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"
import {addPostActionCreator, setPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

  const postElements = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount}/> )

  const newPostElement = React.useRef()

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    const value = newPostElement.current.value
    props.dispatch(setPostTextActionCreator(value))
  }

  return (
    <div className={classes.posts}>
      <h3>My posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          cols="30"
          rows="4"
          value={props.newPostText}
          onChange={onPostChange}
        />
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
