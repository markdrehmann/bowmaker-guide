import React from "react";

function BowDrawing(props) {
  return (
    <div>
      <h3>{props.drawing.title}</h3>
      <img src={props.drawing.url} alt='Bow Drawing' className='bow-drawing' />
    </div>
  )
}

export default BowDrawing