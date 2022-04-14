import React from "react";
import TodoForm from "./todo_form";
import { TodoListItem } from "./todo_list_item";



// export default (props) => {
//   return (
//     <div>
//       <ul>
//         {
//         props.todos.map(todo =>
//           <TodoListItem key={todo.id} todo = {todo} receiveTodo = {props.receiveTodo} removeTodo = {props.removeTodo}/>
//           )}
//       </ul>
//       <TodoForm receiveTodo={props.receiveTodo}/>
//     </div>
//   )
// };

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllTodos();
  }

  render() {
    return (
          <div>
            <ul>
              {
              this.props.todos.map(todo =>
                <TodoListItem key={todo.id} todo = {todo} receiveTodo = {this.props.receiveTodo} removeTodo = {this.props.removeTodo}/>
                )}
            </ul>
            <TodoForm receiveTodo={this.props.receiveTodo} createTodo = {this.props.createTodo} errors = {this.props.errors}/>
          </div>
        )
  }
}

export default TodoList;