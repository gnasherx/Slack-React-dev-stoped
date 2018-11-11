import React from "react";
import {
  ChannelHeaderContainer,
  ChannelTeamUsernameContainer,
  ChannelTeamName,
  ChannelUsername,
  ChannelNotification
} from "../styledComponent/ChannelHeader";
import Notification from "../assets/icons/Notification.svg";

const ChannelHeader = () => {
  return (
    <ChannelHeaderContainer>
      <ChannelTeamUsernameContainer>
        <ChannelTeamName>Apple</ChannelTeamName>
        <ChannelUsername>Ganesh Pawar</ChannelUsername>
      </ChannelTeamUsernameContainer>
      <ChannelNotification>
        <img src={Notification} alt="Notification" />
      </ChannelNotification>
    </ChannelHeaderContainer>
  );
};

export default ChannelHeader;
