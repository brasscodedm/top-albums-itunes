import { render, screen } from '@testing-library/react';

import { EmptyRowsBox } from './EmptyRowsBox';

describe('EmptyRowsBox', () => {
  it('should render EmptyRowBox with height equal 53px', () => {
    render(<EmptyRowsBox emptyRows={1} />);

    expect(screen.getByTestId('empty-row-box')).toHaveStyle({ height: '53px' });
  });

  it('should render 2 empty rows', () => {
    render(<EmptyRowsBox emptyRows={2} />);

    expect(screen.getByTestId('empty-row-box')).toHaveStyle({ height: '106px' });
  });

  describe('EmptyRowsBox', () => {
    it('should render 5 empty rows', () => {
      const emptyRows = 5;
      render(<EmptyRowsBox emptyRows={emptyRows} />);
      const emptyRowBox = screen.getByTestId('empty-row-box');
      expect(emptyRowBox).toHaveStyle('height: 265px;');
    });
  });
});
