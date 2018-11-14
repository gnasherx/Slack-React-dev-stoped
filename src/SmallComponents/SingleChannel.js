import React from "react";
import {
  ChannelContainer,
  ChannelContent,
  ChannelItem
} from "../styledComponent/SingleChannel";
import Hash from "../assets/icons/Hash.svg";

const SingleChannel = ({ channel, onChannelClick }) => {
  return (
    <ChannelContainer onClick={onChannelClick}>
      <ChannelItem>
        <ChannelContent>
          <img src={Hash} alt="hash" style={{ marginRight: "6px" }} />
          {channel}
        </ChannelContent>
      </ChannelItem>
    </ChannelContainer>
  );
};

export default SingleChannel;
