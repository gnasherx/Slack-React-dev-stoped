import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { connect } from "react-redux";
import NewTeam from "./pages/NewTeam";
import NewChannel from "./pages/NewChannel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   this.props.isUserSignedIn();
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/new-team" component={NewTeam} />
          <Route exact path="/new-channel" component={NewChannel} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // isUserSignedIn: () => dispatch(isUserSignedIn())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
