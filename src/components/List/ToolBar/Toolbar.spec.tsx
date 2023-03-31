import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toolbar } from './Toolbar';

describe('Toolbar', () => {
  const props = {
    numSelected: 0,
    filterName: '',
    onFilterName: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Toolbar with filter input when numSelected is 0', () => {
    render(<Toolbar {...props} />);
    const searchInput = screen.getByLabelText('toolbar-search');
    expect(searchInput).toBeInTheDocument();
  });

  it('should call onFilterName when filter input is changed', async () => {
    render(<Toolbar {...props} />);
    const searchInput = screen.getByLabelText('toolbar-search');
    const searchText = 'John';

    await userEvent.type(searchInput, searchText);

    expect(props.onFilterName).toHaveBeenCalledTimes(searchText.length);
  });

  it('should render Toolbar with delete button when numSelected is greater than 0', () => {
    const propsWithSelection = { ...props, numSelected: 1 };
    render(<Toolbar {...propsWithSelection} />);
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    expect(deleteButton).toBeInTheDocument();
  });

  it('should render Toolbar with filter button when numSelected is 0', () => {
    render(<Toolbar {...props} />);
    const filterButton = screen.getByRole('button', { name: 'Filter list' });
    expect(filterButton).toBeInTheDocument();
  });
});
