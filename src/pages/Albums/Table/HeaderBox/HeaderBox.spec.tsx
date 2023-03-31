import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import { HeaderBox } from './HeaderBox';

describe('HeaderBox', () => {
  const renderComponent = () =>
    render(
      <RecoilRoot>
        <HeaderBox />
      </RecoilRoot>
    );

  it('should render the title with the correct count', () => {
    renderComponent();
    expect(screen.getByText('Top 100 iTunes albums!')).toBeInTheDocument();
  });

  it('should have the correct typography variant', () => {
    renderComponent();
    const title = screen.getByText('Top 100 iTunes albums!');
    expect(title.tagName).toBe('H4');
  });

  it('should have the correct margin bottom', () => {
    renderComponent();
    const title = screen.getByText('Top 100 iTunes albums!');
    expect(title.parentElement).toHaveStyle('margin-bottom: 40px');
  });
});
