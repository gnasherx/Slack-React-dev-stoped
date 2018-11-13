import React from "react";
import { Ul, Li, LinkTitle } from "../styledComponent/navbar";
import { Link } from "react-router-dom";

const SigninLinks = () => {
  return (
    <Ul>
      <Li>
        <Link to="/signup">
          <LinkTitle>Signup</LinkTitle>
        </Link>
      </Li>
      <Li>
        <LinkTitle>Help</LinkTitle>
      </Li>
    </Ul>
  );
};

export default SigninLinks;
