import React from "react";
import styled from "styled-components";
import secondaryBcg from "../images/secondaryBcg.jpeg";

export default function Header({ img, children }) {
  return <HeaderWrapper img={img}>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  min-height: 100vh;
  background: url(${props => props.img}) center/cover no-repeat fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Header.defaultProps = {
  img: secondaryBcg
};
