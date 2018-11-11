import React from "react";
import { NavContainer, Logo, AlignLinks } from "../styledComponent/navbar";
import SigninLinks from "../SmallComponents/SigninLinks";
import SignupLinks from "../SmallComponents/SignupLinks";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavContainer>
      <Link to="/">
        <Logo>
          <h2 style={{ fontWeight: 900, color: "#2c2d2e" }}>Slack-React</h2>
        </Logo>
      </Link>
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
