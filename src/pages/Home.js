import React from "react";
import Teams from "../presentationalComp/Teams";
import Channels from "../presentationalComp/Channels";
import Header from "../presentationalComp/Header";
import Input from "../presentationalComp/Input";
import Messages from "../presentationalComp/Messages";

const Home = () => {
  return (
    <div className="app-layout">
      <div className="teams box">
        <Teams />
      </div>
      <div className="channels ">
        <Channels />
      </div>
      <div className="header box">
        <Header />
      </div>
      <div className="messages box">
        <ul className="message-list">
          <Messages />
        </ul>
      </div>
      <div className="input box">
        <Input />
      </div>
    </div>
  );
};

export default Home;
