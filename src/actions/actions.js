export const getBowmakers = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch("http://localhost:3001/bowmakers")
      .then(res => res.json())
      .then(bowmakers => {
        if (bowmakers.errors) {
          alert(bowmakers.errors)
          // dispatch({type: 'FAILED_REQUEST'})
        } else {
          // console.log("inside getBowmakers action in actions.js", bowmakers)
          dispatch({type: 'GET_BOWMAKERS', bowmakers})
        }
      })
      .catch(console.log)
  }
}

export const getDrawings = (makerId) => {
  let maker_drawings;
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch("http://localhost:3001/bow_drawings/")
      .then(res => res.json())
      .then(drawings => {
        if (drawings.errors) {
          alert(drawings.errors)
          // dispatch({type: 'FAILED_REQUEST'})
        } else {
          // this is wrong right now
          maker_drawings = drawings.filter(d => d.bowmaker_id === makerId)
          console.log("inside getDrawings action in actions.js", maker_drawings)
          // dispatch({type: 'GET_DRAWINGS', drawings})
        }
      })
      .catch(console.log)
  }
}