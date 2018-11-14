import React from "react";
import NavBar from "../presentationalComp/NavBar";
import { Container, Card, CenterAlign } from "../styledComponent/style";
import { H1 } from "../styledComponent/typography";
import InputBox from "../containerComponent/InputBox";
import Label from "../containerComponent/Label";
import { Button } from "../containerComponent/Button";
import { connect } from "react-redux";
import { createTeam } from "../store/actions/teamActions.js";

class NewTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamname: "",
      workspace: "",
      description: ""
    };

    this.handleTeamDetailsChange = this.handleTeamDetailsChange.bind(this);
    this.createNewTeam = this.createNewTeam.bind(this);
  }

  handleTeamDetailsChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createNewTeam = () => {
    const uid = this.props.auth.uid;

    const newTeam = {
      uid: uid,
      teamname: this.state.teamname,
      workspace: this.state.workspace,
      description: this.state.description
    };

    this.props.newTeam(newTeam);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Container width="100%">
          <NavBar />

          <Card padding="60px" width="35%">
            <H1 size="28px" weight="900" margin="0 auto 40px">
              Create a new team
            </H1>
            <Label title="Enter your team's name" marginBottom="8px" />
            <InputBox
              type="text"
              name="teamname"
              placeholder=""
              onChange={this.handleTeamDetailsChange}
              marginBottom="20px"
            />
            <Label title="Workspace name" marginBottom="8px" />
            <InputBox
              type="text"
              name="workspace"
              placeholder=""
              onChange={this.handleTeamDetailsChange}
              marginBottom="20px"
            />
            <Label
              title="Workspace description [Optional]"
              marginBottom="8px"
            />
            <InputBox
              type="text"
              name="description"
              placeholder=""
              onChange={this.handleTeamDetailsChange}
              marginBottom="20px"
            />
            <CenterAlign>
              <Button onClick={this.createNewTeam} margin="20px">
                Create Team
              </Button>
            </CenterAlign>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newTeam: teamDetails => dispatch(createTeam(teamDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTeam);
