import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store = undefined;

  if(window.user) {
  const preloadedState = {
    entities: {
      user: { [window.user.id]: window.user }
    },
      session: { id: window.user.id }
    };

    store = configureStore(preloadedState);
    delete window.user;
  }
  else {
    store = configureStore();
  }

  const root = document.getElementById("root");

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});