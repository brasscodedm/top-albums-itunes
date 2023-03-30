import { render, screen } from '@testing-library/react';

import { EmptyRowsBox } from './EmptyRowsBox';

describe('pages/Albums/Table/EmptyRowsBox', () => {
  it('should render EmptyRowBox with height equal 53px', () => {
    render(<EmptyRowsBox emptyRows={1} />);

    expect(screen.getByTestId('empty-row-box')).toHaveStyle({ height: '53px' });
  });

  it('should render EmptyRowBox with height equal 106px', () => {
    render(<EmptyRowsBox emptyRows={2} />);

    expect(screen.getByTestId('empty-row-box')).toHaveStyle({ height: '106px' });
  });
});
