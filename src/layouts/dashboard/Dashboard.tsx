import { Albums } from '@/pages/Albums/Albums';

import { Main, StyledRoot } from './Dashboard.styles';

export const Dashboard = () => {
  return (
    <StyledRoot>
      <Main>
        <Albums />
      </Main>
    </StyledRoot>
  );
};
