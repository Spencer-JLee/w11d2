import React from "react";
import ReactDOM from "react-dom";
import {configureStore} from './store/store';
import {receiveTodo, receiveTodos, removeTodo} from "./actions/todos_actions";
import {receiveStep, receiveSteps, removeStep} from "./actions/step_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  const todos = <h1>Todos App</h1>;
  ReactDOM.render(<h1>Todos App</h1>, root);
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
})


