import styled from "styled-components";

const color = "#F15025";
const transition = time => `all ${time} linear`;
export const ButtonWrapper = styled.button`
  color: ${props => props.color};
`;
