import { render, screen } from '@testing-library/react';

import { HeaderBox } from './HeaderBox';

describe('HeaderBox', () => {
  it('should render the title with the correct count', () => {
    render(<HeaderBox count={10} />);
    expect(screen.getByText('Top 10 iTunes albums!')).toBeInTheDocument();
  });

  it('should have the correct typography variant', () => {
    render(<HeaderBox count={10} />);
    const title = screen.getByText('Top 10 iTunes albums!');
    expect(title.tagName).toBe('H4');
  });

  it('should have the correct margin bottom', () => {
    render(<HeaderBox count={10} />);
    const title = screen.getByText('Top 10 iTunes albums!');
    expect(title.parentElement).toHaveStyle('margin-bottom: 40px');
  });
});
