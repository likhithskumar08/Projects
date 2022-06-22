import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div>
      <h3 id="logo">ToDoApp</h3>
      <div className="container">
        <ul className="items">
          <li>
            <a href="./Home">Home</a>
          </li>
          <li>
            <a href="./Home">About</a>
          </li>
          <li>
            <a href="./Home">Info</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
