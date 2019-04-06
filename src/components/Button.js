import styled from "styled-components";

const color = "#F15025";
const transition = time => `all ${time} linear`;
export const ButtonWrapper = styled.button`
  font-size: 2rem;
  background: ${color};
  color: var(--primaryColor);
  transition: ${transition("2s")};
  &:hover {
    background: black;
  }
`;
