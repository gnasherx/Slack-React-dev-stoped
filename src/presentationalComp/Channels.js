import React from "react";

import SingleChannel from "../SmallComponents/SingleChannel";
import { Title, TitleContainer } from "../styledComponent/SingleChannel";

const Channels = () => {
  return (
    <div>
      <p>Channels</p>
      <TitleContainer>
        <Title>Channels</Title>
      </TitleContainer>
      <SingleChannel />
    </div>
  );
};

export default Channels;
