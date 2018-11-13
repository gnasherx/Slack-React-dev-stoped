import styled from "styled-components";

export const NavContainer = styled.div`
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  z-index: 99;
  transition: transform 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const Logo = styled.div`
  float: left;
  vertical-align: middle;
  margin: 0 20px;
`;

// SigninLinks

export const Ul = styled.ul`
  vertical-align: center;
`;

export const Li = styled.li`
  display: inline-block;
`;

export const LinkTitle = styled.p`
  color: #2c2d2e;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 0 10px;
  padding: 0;
  cursor: pointer;
  line-height: 1em;
  padding: 8px 7px 9px;
  border-radius: 5px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const AlignLinks = styled.div`
  vertical-align: middle;
  float: right;
  margin: 0 20px;
`;
