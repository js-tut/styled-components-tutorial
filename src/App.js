import React, { Component } from "react";
import { InputBasic, InputEmail, InputAwesome } from "./components/Inputs";
class App extends Component {
  render() {
    return (
      <div>
        <InputBasic />
        <InputEmail />
        <InputAwesome type="email" placeholder="johnsmith@gmail.com" />
        <InputAwesome type="password" />
        <InputAwesome />
      </div>
    );
  }
}

export default App;
