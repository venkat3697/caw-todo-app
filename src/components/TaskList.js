import React, { useState } from 'react';

const TaskList = ({ tasks, onDeleteTask, onEditTask, onToggleCompletion }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
  };

  const handleSave = () => {
    if (!editTitle.trim()) {
      alert('Task title cannot be empty!');
      return;
    }
    onEditTask(editId, editTitle);
    setEditId(null);
    setEditTitle('');
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={task.completed}
              onChange={() => onToggleCompletion(task.id)}
            />
            {editId === task.id ? (
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            ) : (
              <span className={task.completed ? 'text-decoration-line-through' : ''}>
                {task.title}
              </span>
            )}
          </div>
          <div>
            {editId === task.id ? (
              <button className="btn btn-sm btn-success me-2" onClick={handleSave}>
                Save
              </button>
            ) : (
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(task)}>
                Edit
              </button>
            )}
            <button className="btn btn-sm btn-danger" onClick={() => onDeleteTask(task.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
