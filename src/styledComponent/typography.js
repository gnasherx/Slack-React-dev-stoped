import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${props => props.size}
  font-weight: ${props => props.weight}
  line-height: 1.05;
  color: ${props => props.color || "#2c2d2e"}
  margin: ${props => props.margin || 0}
`;
