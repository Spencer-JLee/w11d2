import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions'
const initialState = [];

const errorReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({},state);

  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return state;
    default:
      return state;
  }
}

export default errorReducer