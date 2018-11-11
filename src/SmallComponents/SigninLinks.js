import React from "react";
import { Ul, Li, A } from "../styledComponent/navbar";
import { Link } from "react-router-dom";

const SigninLinks = () => {
  return (
    <Ul>
      <Link to="/signup">
        <Li>
          <A>Signup</A>
        </Li>
      </Link>
      <Li>
        <A>Help</A>
      </Li>
    </Ul>
  );
};

export default SigninLinks;
