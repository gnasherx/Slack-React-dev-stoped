import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  vertical-align: middle;
  margin: 0 0 4px 0;
`;

export const HeaderH1 = styled.h1`
  color: #2c2d2e;
  font-size: 18px;
  font-weight: 900;
  padding: 0;
  margin: 0;
`;

export const ChannelSelected = styled.p`
  color: #2c2d2e;
  font-size: 14px;
  line-height: normal;
  margin: 0 8px 0 8px;
  padding: 0;
`;
