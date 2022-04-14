import { connect } from "react-redux";
import { receiveTodo, removeTodo } from "../../actions/todos_actions";
import TodoList from "./todo_list";
import { fetchAllTodos, createTodo } from "../../actions/todos_actions";

const mapStateToProps = (state) => {
  return ({
    todos: Object.values(state.todos),
    errors: Object.values(state.errors)
  });
};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => {
    dispatch(receiveTodo(todo));
  },
  removeTodo: (todo) =>{
    dispatch(removeTodo(todo));
  },
  fetchAllTodos: () => dispatch(fetchAllTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);