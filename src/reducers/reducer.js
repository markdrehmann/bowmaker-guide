function reducer(state = {
  bowmakers: [],
  drawings: [],
  photos: [],
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
        ...state,
        bowmakers: action.bowmakers,
        loading: false
      }
    case 'CREATE_BOWMAKER':
      return {
        ...state,
        bowmakers: [...state.bowmakers, action.response],
        loading: false
      }
    case 'GET_DRAWINGS':
      return {
        ...state,
        drawings: action.maker_drawings,
        loading: false
      }
    case 'GET_PHOTOS':
      return {
        ...state,
        photos: action.maker_photos,
        loading: false
      }
    case 'FAILED_REQUEST':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default reducer;