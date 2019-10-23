import React, { Component } from "react";
import { Link } from "react-router-dom";

class Board extends Component {
  state = {};
  render() {
    console.log("Board rendered");
    return (
      <div className="board">
        <Link to="/" className="goHome">
          Home
        </Link>
        <h3>board component ing...</h3>
      </div>
    );
  }
}

export default Board;
