import React from "react";
import {
  ChannelContainer,
  ChannelContent,
  ChannelItem
} from "../styledComponent/SingleChannel";
import Hash from "../assets/icons/Hash.svg";

const SingleChannel = () => {
  return (
    <ChannelContainer>
      <ChannelItem>
        <ChannelContent>
          <img src={Hash} alt="hash" style={{ marginRight: "6px" }} />
          Design
        </ChannelContent>
      </ChannelItem>
      <ChannelItem>
        <ChannelContent>
          <img src={Hash} alt="hash" style={{ marginRight: "6px" }} />
          Introduction
        </ChannelContent>
      </ChannelItem>
      <ChannelItem>
        <ChannelContent>
          <img src={Hash} alt="hash" style={{ marginRight: "6px" }} />
          Help
        </ChannelContent>
      </ChannelItem>
    </ChannelContainer>
  );
};

export default SingleChannel;
