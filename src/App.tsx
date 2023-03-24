import { ThemeProvider } from './theme';
import { Albums } from './pages/Albums/Albums';
import { RecoilRoot } from 'recoil';

export const App = () => {
  return (
    <ThemeProvider>
      <RecoilRoot>
        <Albums />
      </RecoilRoot>
    </ThemeProvider>
  );
};
