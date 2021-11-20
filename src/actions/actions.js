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
          maker_drawings = drawings.filter(d => d.bowmaker_id === makerId)
          // console.log("inside getDrawings action in actions.js", maker_drawings)
          dispatch({type: 'GET_DRAWINGS', maker_drawings})
        }
      })
      .catch(console.log)
  }
}

export const getPhotos = (makerId) => {
  let maker_photos;
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch("http://localhost:3001/bow_photos/")
      .then(res => res.json())
      .then(photos => {
        if (photos.errors) {
          alert(photos.errors)
          // dispatch({type: 'FAILED_REQUEST'})
        } else {
          maker_photos = photos.filter(p => p.bowmaker_id === makerId)
          // console.log("inside getPhotos action in actions.js", maker_photos)
          dispatch({type: 'GET_PHOTOS', maker_photos})
        }
      })
      .catch(console.log)
  }
}