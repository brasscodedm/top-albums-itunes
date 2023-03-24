//
import Card from './Card.js';
import Paper from './Paper.js';
import Input from './Input.js';
import Table from './Table.js';
import Button from './Button.js';
import Tooltip from './Tooltip.js';
import Backdrop from './Backdrop.js';
import Typography from './Typography.js';
import Autocomplete from './Autocomplete.js';
import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Card(theme),
    Table(theme),
    Input(theme),
    Paper(),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme)
  );
}
