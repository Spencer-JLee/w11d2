export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";
import { fetchTodos, postTodo } from "../util/todo_api_utils";
import {receiveErrors, clearErrors} from "./error_actions"

export const fetchAllTodos = () => (dispatch) => {
  return fetchTodos().then(todos => dispatch(receiveTodos(todos)));
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo,
  };
};

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos,
  };
};

export const removeTodo = (todo) =>{
  return {
    type: REMOVE_TODO,
    todo,
  };
};

export const createTodo = (todo) => {
  return dispatch  => {
    return postTodo(todo)
      .then(
        todo => dispatch(receiveTodo(todo)),
        err => dispatch(receiveErrors(err.responseJSON))
      );
  };
};

