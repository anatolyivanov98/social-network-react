const SET_MESSAGE_BODY = 'SET-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
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

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body
      }
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, {
          id: 6,
          message: state.newMessageBody
        }],
        newMessageBody: ''
      }
    }
    default:
      return state
  }
}


export const setMessageBodyCreator = (body) => ({
  type: SET_MESSAGE_BODY,
  body
})

export const sendNewMessage = () => ({type: SEND_MESSAGE})

export default dialogsReducer
