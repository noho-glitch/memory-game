import React from "react";
import "./style.css";

function Title(props) {
  return <div className="header"><h1 className="title">Archer Memory Game</h1><h1 className="scoretracker">Score: {props.score}   High Score: </h1></div>

}

export default Title;
