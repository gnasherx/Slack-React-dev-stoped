import React from "react";
import styled from "styled-components";

const LabelContainer = styled.label`
  color: #2c2d2e;
  display: block;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: ${props => props.marginBottom || 0};
`;

const Label = ({ title, marginBottom }) => {
  return <LabelContainer marginBottom={marginBottom}>{title}</LabelContainer>;
};

export default Label;
