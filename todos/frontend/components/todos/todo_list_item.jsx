import React from 'react';
import TodoDetailContainer from './todo_detail_container';

export class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      detail: false
    };
    this.handleDone = this.handleDone.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  displayDone(){
    if (this.props.todo.done){
      return "Undone";
    } else {
      return "Done";
    }
  }

  handleTitle(e){
    this.state.detail ? this.setState({detail: false}) : this.setState({detail: true});
  }

  handleDone(e){
    const newTodo = {
      id: this.props.todo.id,
      title: this.props.todo.title,
      body: this.props.todo.body,
      done: !(this.props.todo.done)
    }
    this.props.receiveTodo(newTodo);
  }
  render(){
    
      return (
        
        <div>
          <li onClick={this.handleTitle}>Title:{this.props.todo.title}</li>
          <button onClick={this.handleDone}>{this.displayDone()}</button>
          {this.state.detail ? <TodoDetailContainer todo={this.props.todo}/> : <></>}
        </div>
      )
    }
}