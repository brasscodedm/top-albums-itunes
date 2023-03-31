import { RecoilRoot } from 'recoil';

import { Dashboard } from './layouts/dashboard/Dashboard';
import { ThemeProvider } from './theme';

export const App = () => {
  return (
    <ThemeProvider>
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    </ThemeProvider>
  );
};
