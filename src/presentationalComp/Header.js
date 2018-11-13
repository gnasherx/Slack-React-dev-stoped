import React from "react";
import {
  HeaderContainer,
  HeaderH1,
  HeaderContent,
  ChannelSelected
} from "../styledComponent/Header";
import HashBlack from "../assets/icons/HashBlack.svg";
import Star from "../assets/icons/Star.svg";
import { Button } from "../containerComponent/Button";

const signout = () => {};

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent justifyContent="space-between">
        <div>
          <HeaderContent justifyContent="flex-start">
            <img src={HashBlack} alt="Hash" />
            <HeaderH1>Introductions</HeaderH1>
          </HeaderContent>
          <HeaderContent justifyContent="flex-start">
            <img src={Star} alt="Star" />
            <ChannelSelected>Add topic</ChannelSelected>
          </HeaderContent>
        </div>
        <div>
          <Button onClick={signout}>Signout</Button>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
