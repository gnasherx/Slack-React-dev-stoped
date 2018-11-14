import React from "react";
import InputBox from "../containerComponent/InputBox";
import { Button } from "../containerComponent/Button";
import Label from "../containerComponent/Label";
import { Container, Card, CenterAlign } from "../styledComponent/style";
import { H1 } from "../styledComponent/typography";
import NavBar from "../presentationalComp/NavBar";
import { connect } from "react-redux";
import { signIn } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  login(e) {
    e.preventDefault();
    this.props.signIn({
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    console.log(this.props.signinFailed);
    if (this.props.auth.uid) {
      return <Redirect to="/" />;
    } else {
      console.log("Singin first :(");
    }
    console.log("auth", this.props.auth.uid);

    return (
      <Container width="100%">
        <NavBar />

        <Card padding="60px" width="35%">
          <H1 size="28px" weight="900" margin="0 auto 40px">
            Welcome
          </H1>
          <Label title="Email" marginBottom="8px" />
          <InputBox
            inputType="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            marginBottom="20px"
            placeholder=""
          />
          <Label title="Password" marginBottom="8px" />
          <InputBox
            inputType="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            marginBottom="20px"
            placeholder=""
          />
          <CenterAlign>
            <Button onClick={this.login} margin="20px 0 0 0">
              Get Started
            </Button>
          </CenterAlign>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    signinFailed: state.auth.signinFailed,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
