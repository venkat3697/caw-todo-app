import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="mb-4">
      <button
        className={`btn me-2 ${filter === 'All' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setFilter('All')}
      >
        All
      </button>
      <button
        className={`btn me-2 ${filter === 'Completed' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setFilter('Completed')}
      >
        Completed
      </button>
      <button
        className={`btn ${filter === 'Pending' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setFilter('Pending')}
      >
        Pending
      </button>
    </div>
  );
};

export default TaskFilter;
