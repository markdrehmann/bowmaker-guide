import React from "react";

const BowmakerHeader = props => {
  return (
    <>
      <h2 className='bowmaker-name' >{props.bowmaker.first_name} {props.bowmaker.last_name}</h2>
      <p>{props.bowmaker.birth_year} - {props.bowmaker.year_of_death}</p>
    </>
  )
}

export default BowmakerHeader