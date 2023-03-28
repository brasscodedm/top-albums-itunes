import { createTheme, CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ReactElement, useMemo } from 'react';

import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      shadows: shadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
