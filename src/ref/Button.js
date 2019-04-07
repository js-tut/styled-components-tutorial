import styled from "styled-components";

export const ButtonWrapper = styled.button`
  color: ${props => props.color};
  font-size: ${props => (props.big ? "2rem" : "1rem")};
  ${props => `background:${props.background}`}
`;
