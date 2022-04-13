export const allTodos = (state) => {
  return Object.values(state.todos);
};

export const stepsByTodoId = (state, todoId) => {
  const arr = [];
  state.steps.forEach(step => {
    if(step.todo_id === todoId){
      arr.push(step);
    }
  });

  return arr;
};