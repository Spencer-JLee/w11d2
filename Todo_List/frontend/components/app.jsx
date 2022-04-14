import React from 'react';
import TodoListContainer from './todos/todo_list_container';

const App = () => {
  return(
    <TodoListContainer store = {store}/>
  )
}

export default App;