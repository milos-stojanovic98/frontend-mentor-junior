import styled from "styled-components";

export const StyledToggleButton = styled.button`
  margin: 0.1rem;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledTogglerDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifycontent};
  align-items: center;
  margin-top: 1rem;
  height: 1.6rem;
  width: 3rem;
  border-radius: 25px;
  background: ${(props) => props.background};
`;

export const StyledTogglerLabel = styled.label`
  color: ${(props) => props.color};
  font-size: 0.8rem;
  margin-top: 1.3rem;
  font-weight: 700;
  width: 5rem;
  height: 1rem;
`;
