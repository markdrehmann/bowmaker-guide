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
          dispatch({type: 'GET_BOWMAKERS', bowmakers})
        }
      })
      .catch(console.log)
  }
}