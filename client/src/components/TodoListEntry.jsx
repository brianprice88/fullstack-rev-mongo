// make a functional stateless component to render priority, todo name, and 3 buttons (delete, +, and -)

import React from 'react';

const TodoListEntry = (props) => {
  const {todo, deleteTodo, updateTodo} = props;
  return (
    <div>
      <div>
        {todo.priority}
        {todo.name}
        <button type="button" onClick = {() => deleteTodo(todo._id)}>Delete</button>
        <button type="button" onClick = {() => updateTodo(todo._id, todo.priority + 1)}>+</button>
        <button type="button" onClick = {() => updateTodo(todo._id, todo.priority -1)}>-</button>
      </div>
    </div>
  )
}

export default TodoListEntry