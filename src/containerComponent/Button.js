import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  padding: 12px 22px 12px 22px;
  margin: ${props => props.margin || 0};
  outline: none;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.bgColor || "#3f46ad"};
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #1c299d;
    transition: background-color 0.3s ease;
  }
`;

export const Button = ({ onClick, children, margin, bgColor }) => {
  return (
    <ButtonContainer onClick={onClick} margin={margin} bgColor={bgColor}>
      {children}
    </ButtonContainer>
  );
};

// Todo => make two types of button, fill and ouline
