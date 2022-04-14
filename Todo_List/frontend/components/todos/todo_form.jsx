import React from 'react';
import {uniqueId} from '../../util/id_generator';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateDone = this.updateDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  updateBody(e){
    this.setState({body: e.target.value});
  }

  updateDone(e){
    this.setState({done: e.target.value});
  }
  
  handleSubmit(e){
    debugger;
    e.preventDefault();
    this.props.createTodo(this.state).then(
      this.setState({
        id: uniqueId(),
        title: '',
        body: '',
        done: false
      })
    );
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Add Todo</h1>
        <label>Title:
          <input type="text" value={this.state.title} onChange={this.updateTitle}/>
        </label>
        <label>Body:
          <input type="text" value={this.state.body} onChange={this.updateBody}/>
        </label>
        {/* <label htmlFor="done">Done:
          <button></button>
        </label> */}
        <input type="submit" value="Add Todo"/>
        <h3>{this.props.errors}</h3>
      </form>
    )
  }
}

export default TodoForm;