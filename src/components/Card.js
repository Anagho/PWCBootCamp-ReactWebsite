// Task to Display:
// Full Name, State of Origin, Track, Description
import React from "react";
import "./Card.css";

// Non Reusable Components
/*
const Card = () => {
  return (
    <div className='card'>
        <h2>Name: Emmanuel Anagho</h2>
        <h3>State: Delta</h3>
        <p>Full Stack</p>
        <p>The languages are used for full stack software development</p>
    </div>

    )
}
*/

// PROPS - Making components Reusable
const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.state}</p>
      <p>{props.stack}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
