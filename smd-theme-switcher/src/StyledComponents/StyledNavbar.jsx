import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 35vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
export const StyledH1 = styled.h1`
  color: ${(props) => props.color};
`;
