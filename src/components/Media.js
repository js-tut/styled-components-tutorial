import styled, { css } from "styled-components";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 676
};

const media = Object.keys(sizes).reduce((acc, curr) => {
  acc[curr] = (...args) => css`
    @media (min-width: ${sizes[curr]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

console.log(media);

export const MainBanner = styled.div`
  width: 70%;
  height: 200px;
  font-size: 2rem;
  background: red;
  color: white;
  ${media.phone`background:${props => props.background};color:yellow`}
`;
export const SecondBanner = styled.div`
  width: 60%;
  height: 100px;
  font-size: 2rem;
  background: blue;
  color: black;
`;
