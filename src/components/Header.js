import React from "react";
import styled from "styled-components";
import secondaryBcg from "../images/secondaryBcg.jpeg";

export function Header({ img, children }) {
  return <HeaderWrapper img={img}>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  min-height: 100vh;
  background: url(${props => props.img}) center/cover no-repeat fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export function Hero({ img, children }) {
  return <HeroWrapper img={img}>{children}</HeroWrapper>;
}
const HeroWrapper = styled(HeaderWrapper)`
  min-height: 60vh;
`;

Header.defaultProps = {
  img: secondaryBcg
};
