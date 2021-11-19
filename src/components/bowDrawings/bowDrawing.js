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

// <img src='https://drive.google.com/uc?export=view&id=1B9hyRJsbBiMuknzhCVtoniczGpBRNn8s' alt='Bow Drawing' className="bow-drawing" />

// https://drive.google.com/uc?export=view&id=   THIS IS THE URL TO USE, NEED TO ADD ID OF PHOTO AT END
