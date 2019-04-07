import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  transition: all 0.5s ease-in-out;
  margin: 2rem;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #ececec;
  }
`;

export const DangerButton = styled(Button)`
  color: red;
  border-color: red;
`;
export const SuccessButton = styled(Button)`
  color: green;
  border-color: green;
  padding: 2rem;
`;
