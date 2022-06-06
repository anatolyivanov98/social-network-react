import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                News post
            </div>
            <div>
                <Post message='Hello, how are you'/>
                <Post message='It`s my first post'/>
            </div>
        </div>
    )
}

export default MyPosts
