import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  render() {
    const user = this.state.user;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
