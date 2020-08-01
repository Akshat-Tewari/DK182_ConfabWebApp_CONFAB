 const INITIAL_STATE = {
    current: {},
    errors: []
  }
  
  export const currentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case "GET_CURRENT_SUCCESS":
        return Object.assign({}, state, {current:action.payload, errors: []});
      case "GET_CURRENT_FAILURE":
        return Object.assign({}, state, {errors: action.errors});
      default:
        return state;
    }
  };