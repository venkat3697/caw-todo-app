import { render, screen, fireEvent } from '@testing-library/react';
import TaskInput from './TaskInput';

describe('TaskInput Component', () => {
  beforeAll(() => {
    // Mock the global alert function
    global.alert = jest.fn();
  });

  afterEach(() => {
    // Clear the alert mock after each test
    jest.clearAllMocks();
  });

  it('calls onAddTask with trimmed input value', () => {
    const onAddTaskMock = jest.fn();
    render(<TaskInput onAddTask={onAddTaskMock} />);

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    // Simulating user input
    fireEvent.change(input, { target: { value: '   New Task   ' } });
    fireEvent.click(addButton);

    // Expect the trimmed value to be passed to onAddTask
    expect(onAddTaskMock).toHaveBeenCalledWith('New Task');
    expect(onAddTaskMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onAddTask for empty input', () => {
    const onAddTaskMock = jest.fn();
    render(<TaskInput onAddTask={onAddTaskMock} />);

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    // Simulating empty input
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);

    // Expect onAddTask not to be called
    expect(onAddTaskMock).not.toHaveBeenCalled();

    // Optionally, check if alert was called
    expect(global.alert).toHaveBeenCalledWith('Task cannot be empty!');
  });
});
