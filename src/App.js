import React, { Component } from "react";
import "./App.css";
import { ButtonWrapper } from "./components/Button";
import mainBcg from "./images/mainBcg.jpeg";
import secondaryBcg from "./images/secondaryBcg.jpeg";

import Header from "./components/Header";
class App extends Component {
  render() {
    return (
      <>
        <Header img={mainBcg} title="welcome to our coffee shop">
          <ButtonWrapper>click me</ButtonWrapper>
        </Header>
        <Header />
      </>
    );
  }
}

export default App;
