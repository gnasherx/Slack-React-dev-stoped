import React from "react";
import Teams from "../presentationalComp/Teams";
import Channels from "../presentationalComp/Channels";
import Header from "../presentationalComp/Header";
import Input from "../presentationalComp/Input";
import Messages from "../presentationalComp/Messages";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Home = ({ auth }) => {
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="app-layout">
      <div className="teams box">
        <Teams />
      </div>
      <div className="channels ">
        <Channels />
      </div>
      <div className="header ">
        <Header />
      </div>
      <div className="messages ">
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

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Home);
