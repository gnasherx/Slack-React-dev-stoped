import React from "react";
import {
  SingleTeam,
  TeamIconContainer,
  TeamIconImage,
  P
} from "../styledComponent/TeamIcon";

const TeamIcon = ({ name, coverpic, imgsize, marginTop, handleTeamClick }) => {
  return (
    <SingleTeam onClick={handleTeamClick}>
      <TeamIconContainer>
        <TeamIconImage>
          <img
            src={coverpic}
            width={imgsize}
            height={imgsize}
            style={{ borderRadius: "4px", marginTop: marginTop }}
          />
        </TeamIconImage>
      </TeamIconContainer>
      <P>{name}</P>
    </SingleTeam>
  );
};

export default TeamIcon;
