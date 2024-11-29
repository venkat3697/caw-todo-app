import { render, screen, fireEvent } from '@testing-library/react';
import TaskFilter from './TaskFilter';

describe('TaskFilter Component', () => {
  const setFilterMock = jest.fn();

  it('calls setFilter with "All" when All button is clicked', () => {
    render(<TaskFilter filter="All" setFilter={setFilterMock} />);

    const allButton = screen.getByText('All');
    fireEvent.click(allButton);

    expect(setFilterMock).toHaveBeenCalledWith('All');
  });

  it('calls setFilter with "Completed" when Completed button is clicked', () => {
    render(<TaskFilter filter="All" setFilter={setFilterMock} />);

    const completedButton = screen.getByText('Completed');
    fireEvent.click(completedButton);

    expect(setFilterMock).toHaveBeenCalledWith('Completed');
  });

  it('calls setFilter with "Pending" when Pending button is clicked', () => {
    render(<TaskFilter filter="All" setFilter={setFilterMock} />);

    const pendingButton = screen.getByText('Pending');
    fireEvent.click(pendingButton);

    expect(setFilterMock).toHaveBeenCalledWith('Pending');
  });
});
