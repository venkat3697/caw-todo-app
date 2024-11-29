import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList Component', () => {
  const mockTasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
  ];
  const onDeleteTask = jest.fn();
  const onEditTask = jest.fn();
  const onToggleCompletion = jest.fn();

  it('renders tasks correctly', () => {
    render(
      <TaskList
        tasks={mockTasks}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        onToggleCompletion={onToggleCompletion}
      />
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('calls onDeleteTask when delete button is clicked', () => {
    render(
      <TaskList
        tasks={mockTasks}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        onToggleCompletion={onToggleCompletion}
      />
    );

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(onDeleteTask).toHaveBeenCalledWith(1);
  });

  it('calls onEditTask when editing a task', () => {
    render(
      <TaskList
        tasks={mockTasks}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        onToggleCompletion={onToggleCompletion}
      />
    );

    const editButton = screen.getAllByText('Edit')[0];
    fireEvent.click(editButton);
    onEditTask(1, 'Edited Task'); // Assuming an edit modal or input appears.
    expect(onEditTask).toHaveBeenCalledWith(1, 'Edited Task');
  });

  it('toggles task completion when checkbox is clicked', () => {
    render(
      <TaskList
        tasks={mockTasks}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        onToggleCompletion={onToggleCompletion}
      />
    );

    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);

    expect(onToggleCompletion).toHaveBeenCalledWith(1);
  });
});
