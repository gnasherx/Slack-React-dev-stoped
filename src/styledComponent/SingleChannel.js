import styled from "styled-components";

export const ChannelContainer = styled.div`
  display: flex;
  width: 100%
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #f5f5f5;
  font-size: 16px;
  line-height: normal;
`;

export const ChannelContent = styled.div`
  height: 26px;
  width: 100%;
  cursor: pointer;
  verical-align: middle;
  padding: 2px 20px 2px 20px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    background-color: #462641;
    transition: color 200ms, background-color 200ms, border 200ms !important;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0 20px;
  vertical-align: middle;
  height: 30px;
  margin: 4px 0 8px 0;
`;

export const Title = styled.p`
  display: block;
  font-size: 17px;
  color: #fff;
  font-weight: 400;
`;
