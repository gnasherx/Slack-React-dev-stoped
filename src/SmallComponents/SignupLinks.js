import React from "react";
import { Ul, Li, A } from "../styledComponent/navbar";
import { Link } from "react-router-dom";

const SignupLinks = () => {
  return (
    <Ul>
      <Link to="/signin">
        <Li>
          <A>Signin</A>
        </Li>
      </Link>
      <Li>
        <A>Help</A>
      </Li>
    </Ul>
  );
};

export default SignupLinks;
