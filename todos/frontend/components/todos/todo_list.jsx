import React from "react";
import TodoForm from "./todo_form";
import { TodoListItem } from "./todo_list_item";

export default (props) => {
  return (
    <div>
      <ul>
        {
        props.todos.map(todo =>
          <TodoListItem key={todo.id} todo = {todo} receiveTodo = {props.receiveTodo} removeTodo = {props.removeTodo}/>
          )}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  )
};