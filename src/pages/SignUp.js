import React from "react";
import InputBox from "../containerComponent/InputBox";
import { Button } from "../containerComponent/Button";
import Label from "../containerComponent/Label";
import { Container, Card, CenterAlign } from "../styledComponent/style";
import { H1 } from "../styledComponent/typography";
import NavBar from "../presentationalComp/NavBar";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      team: "",
      project: "",
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signup(e) {
    e.preventDefault();
   
  }

  render() {
    return (
      <Container width="100%">
        <NavBar />

        <Card padding="60px" width="35%">
          <H1 size="28px" weight="900" margin="0 auto 40px">
            🎉 Start with a new team 🎉
          </H1>
          <Label title="Your name" marginBottom="8px" />
          <InputBox
            inputType="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            marginBottom="20px"
            placeholder=""
          />
          <Label title="Team name" marginBottom="8px" />
          <InputBox
            inputType="text"
            name="team"
            value={this.state.team}
            onChange={this.handleInputChange}
            marginBottom="20px"
            placeholder=""
          />
          <Label title="Project name" marginBottom="8px" />
          <InputBox
            inputType="text"
            name="project"
            value={this.state.project}
            onChange={this.handleInputChange}
            marginBottom="20px"
          />
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
            <Button onClick={this.signup} margin="20px">
              Create Team
            </Button>
          </CenterAlign>
        </Card>
      </Container>
    );
  }
}

export default SignUp;
