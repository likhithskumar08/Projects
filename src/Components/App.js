import React from "react";
import "./App.css";
import Header from "./Header";
import InputTodo from "./InputTodo";
import Design from "./design";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Design />
        <InputTodo />
      </>
    );
  }
}

export default App;
