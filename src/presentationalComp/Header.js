import React from "react";
import {
  HeaderContainer,
  HeaderH1,
  HeaderContent,
  ChannelSelected
} from "../styledComponent/Header";
import HashBlack from "../assets/icons/HashBlack.svg";
import Star from "../assets/icons/Star.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={HashBlack} alt="Hash" />
        <HeaderH1>Introductions</HeaderH1>
      </HeaderContent>
      <HeaderContent>
        <img src={Star} alt="Star" />
        <ChannelSelected>Add topic</ChannelSelected>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
