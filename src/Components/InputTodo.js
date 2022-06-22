import React from "react";
import "./InputTodo.css";

class inputTodo extends React.Component {
  state = {
    title: "",
  };

  render() {
    return (
      <form className="form">
        <label className="name">Add Todo</label>
        <input
          type="text"
          className="todo"
          placeholder="Your To Do List Here"
        ></input>
        <button className="b">
          <i className="fas fa-angle-right"></i>
        </button>
      </form>
    );
  }
}

export default inputTodo;
