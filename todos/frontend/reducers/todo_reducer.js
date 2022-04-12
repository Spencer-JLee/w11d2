import { RECEIVE_TODOS } from "../actions/todos_actions";
import { RECEIVE_TODO } from "../actions/todos_actions";
import { REMOVE_TODO } from "../actions/todos_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) =>{
  Object.freeze(state);
  const newState = Object.assign({},state);

  switch (action.type){
    case RECEIVE_TODOS:
      const todos = {}
      action.todos.forEach(todo =>{
        todos[todo.id] = todo;
      });
      return todos;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
}

export default todosReducer;