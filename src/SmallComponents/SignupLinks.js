import React from "react";
import { Ul, Li, LinkTitle } from "../styledComponent/navbar";
import { Link } from "react-router-dom";

const SignupLinks = () => {
  return (
    <Ul>
      <Li>
        <Link to="/signin">
          <LinkTitle>Signin</LinkTitle>
        </Link>
      </Li>
      <Li>
        <LinkTitle>Help</LinkTitle>
      </Li>
    </Ul>
  );
};

export default SignupLinks;
