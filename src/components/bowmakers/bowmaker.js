import React from "react";

// each <li> should be a link to the ShowBowmaker page for that maker
const Bowmaker = props => {
  return (
    <li id={props.bowmaker.id}>
      {props.bowmaker.last_name.toUpperCase()}, {props.bowmaker.first_name}
    </li>
  )
}

export default Bowmaker