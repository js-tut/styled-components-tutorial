import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>i'm inline style</h1>
        <h2 className="second">i'm app css style</h2>
        <h3 className="property">i'm from css variables</h3>
        <Heading />
      </div>
    );
  }
}

export default App;
