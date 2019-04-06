import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import { ButtonWrapper } from "./components/Button";

class App extends Component {
  render() {
    return (
      <div>
        <ButtonWrapper>I'm in the app js</ButtonWrapper>
        <Heading />
      </div>
    );
  }
}

export default App;