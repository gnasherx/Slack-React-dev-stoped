import React from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  font-size: 18px;
  padding: 12px 16px 12px 16px;
  width: 100%;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #eee;
  margin: 0;
  transition: all 0.2s ease;
  border: none;
  line-height: normal;
  margin-bottom: ${props => props.marginBottom || 0};

  &:focus {
    box-shadow: inset 0 0 0 1px #919193;
  }
  &:hover {
    box-shadow: inset 0 0 0 1px #919193;
  }
`;

const InputBox = ({ name, inputType, value, onChange, marginBottom }) => {
  return (
    <InputContainer
      type={inputType}
      name={name}
      value={value}
      onChange={onChange}
      marginBottom={marginBottom}
      innerRef={x => {
        this.input = x;
      }}
    />
  );
};

export default InputBox;
