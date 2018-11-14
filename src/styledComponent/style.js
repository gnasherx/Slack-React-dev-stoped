import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.width || "100%"}
  display: flex;
  margin: 0 auto;
  padding: 8rem 2rem;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #fff;
  width: ${props => props.width};
  padding: ${props => props.padding || 0};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
`;

export const CenterAlign = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
