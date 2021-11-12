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