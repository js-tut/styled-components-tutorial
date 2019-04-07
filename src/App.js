import React, { Component } from "react";
import "./App.css";
import { ButtonWrapper } from "./components/Button";
import mainBcg from "./images/mainBcg.jpeg";
import secondaryBcg from "./images/secondaryBcg.jpeg";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    font-family:Verdana, Geneva, Tahoma, sans-serif;

  }
`;
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header img={mainBcg}>
          <Banner title="fresh coffee is the best">
            <h3>hello world</h3>
            <ButtonWrapper>click me</ButtonWrapper>
          </Banner>
        </Header>
        <Header />
      </>
    );
  }
}

export default App;
