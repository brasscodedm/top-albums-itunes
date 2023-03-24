// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';
import customShadows from '../customShadows';

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: customShadows().z20,
        },
      },
    },
  };
}
