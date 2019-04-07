import React from "react";
import styled from "styled-components";

export default function Banner({ title, children }) {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      {children}
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  text-align: center;
  h1 {
    color: black;
    font-size: 3rem;
    text-transform: uppercase;
    transition: all 2s linear;
    &:hover {
      color: red;
    }
  }
`;
