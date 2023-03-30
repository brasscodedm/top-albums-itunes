import { Avatar, Box, Button, Checkbox, Stack, TableCell, TableRow, Typography } from '@mui/material';

import { Iconify } from '../../../../components/Iconify/Iconify';
import { Entry } from '../../../../types/Entry';

type Props = {
  row: Entry;
  isSelected: boolean;
  isFavourite: boolean;
  onHandleClick: (id: string) => void;
  onHandleFavourite: (id: string) => void;
};

export const TableRowBox = ({ row, isSelected, isFavourite, onHandleClick, onHandleFavourite }: Props) => {
  const { id, title, image: avatarUrl, artist, category, price: fullPrice } = row;

  return (
    <TableRow hover tabIndex={-1} role="checkbox" selected={isSelected} data-testid="table-row">
      <TableCell padding="checkbox">
        <Checkbox checked={isSelected} onChange={() => onHandleClick(id)} data-testid="table-row-checkbox" />
      </TableCell>

      <TableCell component="th" scope="row" padding="none">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={title} src={avatarUrl} />
          <Typography variant="subtitle2">{title}</Typography>
        </Stack>
      </TableCell>

      <TableCell align="left">{artist}</TableCell>

      <TableCell align="left">{category}</TableCell>

      <TableCell align="left">{fullPrice}</TableCell>
      <TableCell>
        <Button onClick={() => onHandleFavourite(id)} data-testid="favourite-button">
          <Iconify
            icon="typcn:star"
            sx={{ color: isFavourite ? 'warning.main' : 'text.disabled', width: 30, height: 30 }}
          />
        </Button>
      </TableCell>
    </TableRow>
  );
};
