import ReactDOM from "react-dom/client";
import React from "react";
import './index.css';
import App from "./App";
import {addPost} from "./redux/state";

export const rerenderEntriesTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>
  );
}
