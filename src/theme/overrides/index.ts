import { Theme } from '@mui/material/styles';

import Autocomplete from './Autocomplete.js';
import Backdrop from './Backdrop.js';
import Button from './Button.js';
import Card from './Card.js';
import Input from './Input.js';
import Paper from './Paper.js';
import Table from './Table.js';
import Tooltip from './Tooltip.js';
import Typography from './Typography.js';

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
    Autocomplete()
  );
}
