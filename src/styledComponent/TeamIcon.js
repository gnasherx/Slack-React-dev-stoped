import styled from "styled-components";

export const TeamIconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const TeamIconImage = styled.div`
  width: 50px;
  margin: 20px, 10px 0px 10px;
  height: 50px;
  max-width: 100%;
  background: #ffc433;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const P = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 4px 0px 20px 0px;
`;

// New team
export const TeamContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
`;

export const CoverPic = styled.div`
  height: 192px;
  width: 192px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 0 20px 20px 0;
`;

export const VerticalAlign = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
