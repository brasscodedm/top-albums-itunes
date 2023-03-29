import { useState } from 'react';

import { Albums } from '../../pages/Albums/Albums';

import { Main, StyledRoot } from './Dashboard.styles';

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledRoot>
      {/*<Nav openNav={open} onCloseNav={() => setOpen(false)} />*/}

      <Main>
        <Albums />
        {/*/!*<Outlet /> *!/ for routing */}
      </Main>
    </StyledRoot>
  );
};
