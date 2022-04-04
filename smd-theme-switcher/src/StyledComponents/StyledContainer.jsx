import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
`;
