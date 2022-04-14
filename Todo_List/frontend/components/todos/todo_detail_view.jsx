import React from "react";

class TodoDetailView extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render(){
    // debugger;
    return(
      <div>
        <ul>
          <li>Done:{this.props.todo.done.toString()}</li>
        </ul>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default TodoDetailView;