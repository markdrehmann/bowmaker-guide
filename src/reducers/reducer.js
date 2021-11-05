function reducer(state = {
  bowmakers: [],
  loading: false
}, action) {
  switch(action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'GET_BOWMAKERS':
      return {
        bowmakers: action.bowmakers,
        loading: false
      }
    default:
      return state
  }
}

export default reducer;