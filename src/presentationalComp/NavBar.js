import React from "react";
import { NavContainer, Logo, AlignLinks } from "../styledComponent/navbar";
import SigninLinks from "../SmallComponents/SigninLinks";
import SignupLinks from "../SmallComponents/SignupLinks";

const NavBar = () => {
  return (
    <NavContainer>
      <Logo>
        <h2 style={{ fontWeight: 900, color: "#2c2d2e" }}>Slack-React</h2>
      </Logo>
      <AlignLinks>
        <SigninLinks />
      </AlignLinks>
      <AlignLinks>
        <SignupLinks />
      </AlignLinks>
    </NavContainer>
  );
};

export default NavBar;
