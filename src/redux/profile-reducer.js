const ADD_POST = 'ADD-POST'
const SET_POST_TEXT = 'SET-POST-TEXT'

const initialState = {
  posts:[
    {id: 1, message: 'Hello, how are you', likeCount: 12},
    {id: 2, message: 'It`s my first post', likeCount: 23}
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: 3,
        message: state.newPostText,
        likeCount: 0
      })
      state.newPostText = ''
      return state
    case SET_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const setPostTextActionCreator = (newText = '') => ({
  type: SET_POST_TEXT,
  newText
})

export default profileReducer
