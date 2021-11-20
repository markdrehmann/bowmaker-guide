import React from "react";

function BowPhoto(props) {
  return (
    <div>
      <h3>{props.photo.title}</h3>
      <img src={props.photo.url} alt='Bow' className='bow-photo' />
    </div>
  )
}

export default BowPhoto