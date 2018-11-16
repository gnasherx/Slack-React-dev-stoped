import React from "react";

import SingleChannel from "../SmallComponents/SingleChannel";
import { Title, TitleContainer } from "../styledComponent/SingleChannel";
import AddChannel from "../assets/icons/AddChannel.svg";
import AddThreads from "../assets/icons/AllThreads.svg";
import ChannelHeader from "../SmallComponents/ChannelHeader";
import { singleChannelClick } from "../store/actions/channelActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const allChannels = ["Introduction", "Marketing", "Design", "Help"];

const Channels = props => {
  let singleChannel = allChannels.map((channel, index) => {
    return (
      <SingleChannel
        key={index}
        channel={channel}
        onChannelClick={() => props.onChannelClick(index)}
      />
    );
  });

  return (
    <div>
      <ChannelHeader />
      <TitleContainer justifyContent="flex-start" isHover="true">
        <img
          src={AddThreads}
          alt="All Threads"
          style={{ marginRight: "4px", cursor: "pointer" }}
        />
        <Title>All Threads</Title>
      </TitleContainer>

      <div style={{ margin: "0 0 12px 0" }} />

      <TitleContainer justifyContent="space-between">
        <Title>Channels</Title>
        <Link to="/new-channel">
          <img src={AddChannel} alt="Plus Icon" style={{ cursor: "pointer" }} />
        </Link>
      </TitleContainer>
      {singleChannel}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChannelClick: index => dispatch(singleChannelClick(index))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Channels);
