import React from "react";
import NavBar from "../presentationalComp/NavBar";
import { Container, Card, CenterAlign } from "../styledComponent/style";
import { H1 } from "../styledComponent/typography";
import InputBox from "../containerComponent/InputBox";
import {
  TeamContainer,
  CoverPic,
  VerticalAlign
} from "../styledComponent/TeamIcon";
import Label from "../containerComponent/Label";
import { Button } from "../containerComponent/Button";
import { connect } from "react-redux";
import { createTeam } from "../store/actions/teamActions.js";
import { Redirect } from "react-router-dom";

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
    // if (this.props.auth.uid) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div>
        <Container width="100%">
          <NavBar />

          <Card padding="60px" width="35%">
            <H1 size="28px" weight="900" margin="0 auto 40px">
              Create a new team
            </H1>

            <TeamContainer>
              <CoverPic>
                <img
                  src="https://i0.wp.com/dev.slack.com/img/avatars/ava_0010-512.v1443724322.png?ssl=1"
                  alt="Team cover pic"
                  width="192px"
                  height="192px"
                  style={{ borderRadius: "4px" }}
                />
              </CoverPic>
              <VerticalAlign>
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
              </VerticalAlign>
            </TeamContainer>
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
              <Button
                margin="20px 0 0 0"
                bgColor="#fff"
                bgHover="#f5f5f5"
                color="#2c2d2e"
              >
                Cancel
              </Button>
              <Button
                onClick={this.createNewTeam}
                margin="20px 0 0 20px"
                bgColor="#008952"
                bgHover="#025f39"
              >
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
