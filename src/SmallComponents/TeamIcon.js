import React from "react";
import {
  TeamIconContainer,
  TeamIconImage,
  P
} from "../styledComponent/TeamIcon";

const TeamIcon = ({ name, coverpic, imgsize, marginTop }) => {
  return (
    <div>
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
    </div>
  );
};

export default TeamIcon;
