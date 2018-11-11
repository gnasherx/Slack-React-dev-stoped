import React from "react";
import InputBox from "../containerComponent/InputBox";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <InputBox
        type="text"
        value={this.state.message}
        name="message"
        onChange={this.handleMessageChange}
        marginBottom="0px"
        placeholder="Message #general"
      />
    );
  }
}

export default Input;
