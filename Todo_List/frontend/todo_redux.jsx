import React from "react";
import ReactDOM from "react-dom";
import {configureStore} from './store/store';
import {receiveTodo, receiveTodos, removeTodo} from "./actions/todos_actions";
import {receiveStep, receiveSteps, removeStep} from "./actions/step_actions";
import Root from './components/root';
import { allTodos } from "./reducers/selectors";
import {fetchTodos} from "./util/todo_api_utils";
import {fetchAllTodos} from "./actions/todos_actions";
import {myThunk} from "./middleware/thunk"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store = {store}/>, root);
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
  const allTodo = allTodos;
  window.allTodos = allTodo;
  window.fetchTodos = fetchTodos;
  window.fetchAllTodos = fetchAllTodos;
  window.myThunk = myThunk;
})


