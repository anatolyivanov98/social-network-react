import ReactDOM from "react-dom/client";
import './index.css';
import React from "react";
import reportWebVitals from './reportWebVitals';
import state, {addPost, setPostText, subscribe} from "./redux/state";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntriesTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} setPostText={setPostText}/>
    </React.StrictMode>
  );
}

rerenderEntriesTree(state)

subscribe(rerenderEntriesTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
