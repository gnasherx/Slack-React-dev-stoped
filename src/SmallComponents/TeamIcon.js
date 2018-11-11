import React from "react";
import {
  TeamIconContainer,
  TeamIconImage,
  P
} from "../styledComponent/TeamIcon";

const TeamIcon = ({ name }) => {
  return (
    <div>
      <TeamIconContainer>
        <TeamIconImage />
      </TeamIconContainer>
      <P>{name}</P>
    </div>
  );
};

export default TeamIcon;
