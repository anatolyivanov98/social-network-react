let rerenderEntriesTree = () => {}

const state = {
  profilePage: {
    posts:[
      {id: 1, message: 'Hello, how are you', likeCount: 12},
      {id: 2, message: 'It`s my first post', likeCount: 23}
    ],
    newPostText: 'it'
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
    ]
  }
}

export const addPost = (value) => {
  state.profilePage.posts.push({
    id: 3,
    message: value,
    likeCount: 0
  })
  rerenderEntriesTree(state)
}

export const setPostText = (value) => {
  console.log('setPostText: ', value)
  state.profilePage.newPostText = value
  console.log('newPostText: ', state.profilePage.newPostText)
  rerenderEntriesTree(state)
}

export const subscribe = (observer) => {
  rerenderEntriesTree = observer
}

export default state
