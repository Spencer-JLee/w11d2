import { REMOVE_STEP, RECEIVE_STEP, RECEIVE_STEPS } from "../actions/step_actions";

const initialState = {
  1: {
    id: 1,
    todo_id: 1,
    title: "car",
    done: false
  },
  2: {
    id: 2,
    todo_id: 2,
    title: "dog",
    done: true
  }
};

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({},state);

  switch(action.type){
    case RECEIVE_STEPS:
      const steps = {};
      action.steps.forEach(step => {
        steps[step.id] = step;
      });
      return steps;
    case RECEIVE_STEP:
      newState[action.step.id] = action.step;
      return newState;
    case REMOVE_STEP:
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
   
};

export default stepsReducer;