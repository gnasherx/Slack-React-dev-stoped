import styled from "styled-components";

export const ChannelContainer = styled.div`
  display: flex;
  width: 100%
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
 
`;

export const ChannelItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 26px;
  width: 100%;
  display: block;
  vertical-align: middle;
`;

export const ChannelContent = styled.div`
  height: 26px;
  color: #a3a8ad;
  cursor: pointer;
  vertical-align: middle;
  padding: 2px 18px 2px 18px;
  display: block;
  opacity: 0.9;
  font-size: 16px;
  line-height: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: #192532;
    opacity: 1;
    color: #fff;
    transition: color 200ms, background-color 200ms, border 200ms !important;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  padding: 0px 16px 0 16px;
  vertical-align: middle;
  height: 30px;
  margin: 4px 0 8px 0;
  color: #a3a8ad;

  &:hover {
    transition: background-color 0.1s ease-out;
    background-color: ${props => (props.isHover ? "#192532" : null)};
  }
`;

export const Title = styled.p`
  display: block;
  font-size: 16px;
  color: #a3a8ad;
  line-height: 26px;
  font-weight: 400;
  margin: 0px;

  &:hover {
    color: #fff;
    opacity: 1;
    transition: color 0.1s ease-out;
  }
`;
