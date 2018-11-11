import styled from "styled-components";

export const ChannelHeaderContainer = styled.div`
  height: 84px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-itemds: center;
  cursor: pointer;
  margin: 0 0 12px 0;

  &:hover {
    background-color: #192532;
    color: #fff;
    transition: color 200ms, background-color 200ms, border 200ms !important;
  }
`;

export const ChannelTeamUsernameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
`;

export const ChannelTeamName = styled.h2`
  margin: 0 0 4px 0;
  font-size: 1.125rem;
  line-height: 1.375;
  color: #fff;
  font-weight: 900;
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ChannelUsername = styled.p`
  color: #a3a8ad;
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: normal;

  ${ChannelHeaderContainer}:hover & {
    color: #fff;
  }
`;

export const ChannelNotification = styled.div`
  margin: 0;
  vertical-align: middle;

  ${ChannelHeaderContainer}:hover & {
    fill: #fff;
  }
`;
