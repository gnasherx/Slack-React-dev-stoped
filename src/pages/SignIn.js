import React from "react";
import InputBox from "../containerComponent/InputBox";
import { Button } from "../containerComponent/Button";
import Label from "../containerComponent/Label";
import { Container, Card, CenterAlign } from "../styledComponent/style";
import { H1 } from "../styledComponent/typography";
import NavBar from "../presentationalComp/NavBar";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Container width="100%">
        <NavBar />

        <Card padding="60px" width="35%">
          <H1 size="28px" weight="900" margin="0 auto 40px">
            👋 Welcome, Do something great 😇
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
            <Button>Get Started</Button>
          </CenterAlign>
        </Card>
      </Container>
    );
  }
}

export default SignIn;
