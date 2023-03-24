import { ThemeProvider } from './theme';
import { Albums } from './pages/Albums/Albums';

export const App = () => {
  return (
    <ThemeProvider>
      <Albums />
    </ThemeProvider>
  );
};
