import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
function App() {
  return (
    <React.Fragment>
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </React.Fragment>
  );
}

export default App;
