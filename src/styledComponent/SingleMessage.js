import styled from "styled-components";

export const SingleMessageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 12px 0 12px 0;
`;

export const Avatar = styled.div`
  height: 36px;
  width: 36px;
  display: block;
  border-radius: 6px;
  margin: 0 8px 0 0;
`;

export const SingleMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Username = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 15px;
  line-height: 1;
  color: #2c2d2e;
`;

export const Message = styled.p`
  display: inline-block;
  width: 100%;
  color: #2c2d30;
  word-wrap: break-word;
  margin: 4px 0 -4px;
  line-height: 1.46668;
`;
