import styled from "styled-components";

export const StyledTexts = styled.p`
  color: ${(props) => props.color};
  padding-left: 0.8rem;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const NoF = styled.p`
  font-size: 2.7rem;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const Category = styled.span`
  color: ${(props) => props.color};
  font-size: 0.8rem;
  font-weight: 700;
`;

export const NumberToday = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const TotalFollowers = styled.span`
  padding-top: 0.5rem;
  color: ${(props) => props.color};
  font-size: 0.8rem;
  font-weight: 700;
`;
