import React from "react";
import { NewChannelModel, Contents } from "../styledComponent/NewChannel";
import { H1 } from "../styledComponent/typography";
import InputBox from "../containerComponent/InputBox";
import { Button } from "../containerComponent/Button";
import Label from "../containerComponent/Label";
import { CenterAlign } from "../styledComponent/style";
import { connect } from "react-redux";
import { createNewChannel } from "../store/actions/channelActions";

class NewChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channelname: ""
    };
    this.handleChannelName = this.handleChannelName.bind(this);
  }

  handleChannelName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <NewChannelModel>
        <Contents>
          <H1 size="32px" weight="900" margin="0 0 20px 0">
            Create a channel
          </H1>
          <Label title="Name" marginBottom="8px" />
          <InputBox
            type="text"
            name="channelname"
            onChange={this.handleChannelName}
            value={this.state.channelname}
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
              onClick={this.props.createNewChannel(this.props.auth.uid)}
              margin="20px 0 0 20px"
              bgColor="#008952"
              bgHover="#025f39"
            >
              Create Channel
            </Button>
          </CenterAlign>
        </Contents>
      </NewChannelModel>
    );
  }
}

const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewChannel: currentUser => dispatch(createNewChannel(currentUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChannel);
