import React from "react";
import { Link } from "react-router-dom";

// each <li> should be a link to the ShowBowmaker page for that maker
const Bowmaker = props => {
  return (
    <li id={props.bowmaker.id}>
      <Link to={`/makers/${props.bowmaker.id}`} state={{bowmaker: props.bowmaker}} >
        {props.bowmaker.last_name.toUpperCase()}, {props.bowmaker.first_name}
      </Link>
    </li>
  )
}

export default Bowmaker