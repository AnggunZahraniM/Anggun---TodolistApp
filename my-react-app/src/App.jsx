import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Reading', completed: false },
    { id: 2, text: 'Workout', completed: false },
    { id: 3, text: 'Learning', completed: false },
  ]);

  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="main-content">
          <h2 className="title">To-do list</h2>
          <TodoList tasks={tasks} />
          <div className="add-task">
            <input type="text" placeholder="Add a task" onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value !== '') {
                addTask(e.target.value);
                e.target.value = '';
              }
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
