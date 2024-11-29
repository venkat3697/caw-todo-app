import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('filters tasks correctly', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');
    const completedFilterButton = screen.getByText('Completed');
    const allFilterButton = screen.getByText('All');

    // Add two tasks
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);

    // Complete the first task
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    // Filter completed tasks
    fireEvent.click(completedFilterButton);

    // Wait for the DOM update and verify Task 1 is visible
    await waitFor(() => expect(screen.getByText('Task 1')).toBeInTheDocument());
    expect(screen.queryByText('Task 2')).toBeNull();

    // Show all tasks
    fireEvent.click(allFilterButton);

    // Wait for the DOM update and verify both tasks are visible
    await waitFor(() => expect(screen.getByText('Task 1')).toBeInTheDocument());
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});
