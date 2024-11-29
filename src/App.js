import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getFilteredTasks = () => {
    if (filter === 'Completed') {
      return tasks.filter((task) => task.completed);
    }
    if (filter === 'Pending') {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  };

  return (
    <div className="container my-4 w-75">
      <h1 className="text-center">Todo App</h1>
      <TaskInput onAddTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={getFilteredTasks()}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
        onToggleCompletion={toggleCompletion}
      />
    </div>
  );
};

export default App;
