import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
  _state: {
    profilePage: {
      posts:[
        {id: 1, message: 'Hello, how are you', likeCount: 12},
        {id: 2, message: 'It`s my first post', likeCount: 23}
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs:[
        {id: 1, name: 'Tolya'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Serega'},
        {id: 4, name: 'Shamil'},
        {id: 5, name: 'Kolya'}
      ],
      messages:[
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'What is your name'},
      ],
      newMessageBody: ''
    }
  },
  _callbackSubscribe () {},

  getState () {
    return this._state
  },
  subscribe (observer) {
    this._callbackSubscribe = observer
  },

  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callbackSubscribe(this._state)
  }
}

export default store
