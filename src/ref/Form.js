import React from "react";
import styled from "styled-components";
export default function Form() {
  return (
    <FormWrapper>
      <h2>Sign up Form</h2>
      <form>
        <input type="text" name="" id="" placeholder="johnsmith@gmail.com" />
        <button type="submit">submit</button>
      </form>
    </FormWrapper>
  );
}

const FormWrapper = styled.section`
  text-align: center;
  ${props => props.theme.fontFamily};
  ${props => `background:${props.theme.background}`};
  ${props => `color:${props.theme.color}`};

  padding: 3rem;
  input {
    ${props => `background:${props.theme.background}`};
    ${props => `border:2px solid ${props.theme.color}`}
    width: 100%;
    margin: 1rem 0;
    padding: 0.25rem;
    ::placeholder {
      ${props => `color:${props.theme.color}`};
      ${props => props.theme.fontFamily};
    }
  }
  button {
    ${props => props.theme.fontFamily};
    ${props => `background:${props.theme.background}`};
    ${props => `color:${props.theme.color}`};
    ${props => `border:2px solid ${props.theme.color}`}
    transition:all 2s linear;
    width: 100%;
    :hover {
      background: ${props => props.theme.color};
      color: ${props => props.theme.background};
    }
  }
`;
