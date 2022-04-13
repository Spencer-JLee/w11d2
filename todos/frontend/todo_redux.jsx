import React from "react";
import ReactDOM from "react-dom";
import {configureStore} from './store/store';
import {receiveTodo, receiveTodos, removeTodo} from "./actions/todos_actions";
import {receiveStep, receiveSteps, removeStep} from "./actions/step_actions";
import Root from './components/root';
import { allTodos } from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
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
})


