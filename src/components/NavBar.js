import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div className='NavBar'>
      <Link to={`/makers`} >
        Home
      </Link>&emsp;-&emsp;
      <Link to={`/makers/${props.bowmaker.id}`} state={{bowmaker: props.bowmaker}} >
        Biography
      </Link>&emsp;-&emsp;
      <Link to={`/makers/${props.bowmaker.id}/bow_drawings`} state={{bowmaker: props.bowmaker}} >
        Bow Drawings
      </Link>&emsp;-&emsp;
      <Link to={`/makers/${props.bowmaker.id}/bow_photos`} state={{bowmaker: props.bowmaker}} >
        Bow Photos
      </Link>
    </div>
  )
}

export default NavBar