import React from "react";
import {
  TeamIconContainer,
  TeamIconImage,
  P
} from "../styledComponent/TeamIcon";

const TeamIcon = ({ name, coverpic }) => {
  return (
    <div>
      <TeamIconContainer>
        <TeamIconImage>
          <img
            src={coverpic}
            width="50px"
            height="50px"
            style={{ borderRadius: "4px" }}
          />
        </TeamIconImage>
      </TeamIconContainer>
      <P>{name}</P>
    </div>
  );
};

export default TeamIcon;
