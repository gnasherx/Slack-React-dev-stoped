import React from "react";
import {
  SingleMessageContainer,
  Avatar,
  SingleMessageContent,
  Username,
  Message
} from "../styledComponent/SingleMessage";

const SingleMessage = () => {
  return (
    <SingleMessageContainer>
      <Avatar>
        <img
          src="https://i0.wp.com/dev.slack.com/img/avatars/ava_0010-512.v1443724322.png?ssl=1"
          alt="Avatar"
          width="36px"
          height="36px"
          style={{
            borderRadius: "3px",
            verticalAlign: "middle"
          }}
        />
      </Avatar>
      <SingleMessageContent>
        <Username>Ganesh Pawar</Username>
        <Message>
          Some of the differences to the web-version are, that you cannot use
          the keyframes and createGlobalStyle helpers since React Native doesn't
          support keyframes or global styles. We will also warn you if you use
          media queries or nest your CSS.
        </Message>
      </SingleMessageContent>
    </SingleMessageContainer>
  );
};
export default SingleMessage;
