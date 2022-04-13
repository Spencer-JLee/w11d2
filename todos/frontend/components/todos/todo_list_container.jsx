import { connect } from "react-redux";
import { receiveTodo, removeTodo } from "../../actions/todos_actions";
import TodoList from "./todo_list";

const mapStateToProps = (state) => {
  return ({
    todos: Object.values(state.todos)
  });
};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => {
    dispatch(receiveTodo(todo));
  },
  removeTodo: (todo) =>{
    dispatch(removeTodo(todo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);