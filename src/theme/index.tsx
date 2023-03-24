import PropTypes from 'prop-types';
import { ReactElement, useMemo } from 'react';
// @mui
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';

// ----------------------------------------------------------------------

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
