import React from 'react';

const TodoItem = ({ task }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <span>{task.text}</span>
    </div>
  );
};

export default TodoItem;
