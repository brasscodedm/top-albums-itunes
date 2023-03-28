import { RecoilRoot } from 'recoil';

import { Albums } from './pages/Albums/Albums';
import { ThemeProvider } from './theme';

export const App = () => {
  return (
    <ThemeProvider>
      <RecoilRoot>
        <Albums />
      </RecoilRoot>
    </ThemeProvider>
  );
};
