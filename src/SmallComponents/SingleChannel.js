import React from "react";
import {
  ChannelContainer,
  ChannelContent
} from "../styledComponent/SingleChannel";

const SingleChannel = () => {
  return (
    <ChannelContainer>
      <ChannelContent>Design</ChannelContent>
      <ChannelContent>Introductions</ChannelContent>
      <ChannelContent>Development</ChannelContent>
      <ChannelContent>Help</ChannelContent>
    </ChannelContainer>
  );
};

export default SingleChannel;
