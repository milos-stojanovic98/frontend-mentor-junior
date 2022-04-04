import styled from "styled-components";

export const StyledSmallCard = styled.article`
  margin: 0rem 1rem 0rem 1rem;
  height: 100%;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    filter: brightness(150%);
  }
`;
export const StyledBigCard = styled.article`
  margin: 0rem 1rem 0rem 1rem;
  height: 100%;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  transform: translateY(-105px);
  position: relative;
  &:hover {
    cursor: pointer;
    filter: brightness(150%);
  }
`;
