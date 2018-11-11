import React from "react";

import SingleChannel from "../SmallComponents/SingleChannel";
import { Title, TitleContainer } from "../styledComponent/SingleChannel";
import AddChannel from "../assets/icons/AddChannel.svg";
import AddThreads from "../assets/icons/AllThreads.svg";

const Channels = () => {
  return (
    <div>
      <p>Channels</p>
      <TitleContainer justifyContent="flex-start" isHover="true">
        <img
          src={AddThreads}
          alt="Plus Icon"
          style={{ marginRight: "4px", cursor: "pointer" }}
        />
        <Title>All Threads</Title>
      </TitleContainer>

      <TitleContainer justifyContent="space-between">
        <Title>Channels</Title>
        <img src={AddChannel} alt="Plus Icon" style={{ cursor: "pointer" }} />
      </TitleContainer>
      <SingleChannel />
    </div>
  );
};

export default Channels;
