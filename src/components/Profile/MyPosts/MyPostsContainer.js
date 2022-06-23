import React from "react";
import {addPostActionCreator, setPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState()

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  const onPostChange = (value) => {
    props.store.dispatch(setPostTextActionCreator(value))
  }

  return (<MyPosts
            addPost={addPost}
            onPostChange={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />)
}

export default MyPostsContainer
