import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      alert('Task cannot be empty!');
      return;
    }else{
        onAddTask(trimmedTitle);
        setTitle("")
    }
   
   
  };
  

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
