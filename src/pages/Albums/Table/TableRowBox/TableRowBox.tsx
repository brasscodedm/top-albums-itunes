import { Avatar, Box, Checkbox, Stack, TableCell, TableRow, Typography } from '@mui/material';

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
    <TableRow hover key={id + title} tabIndex={-1} role="checkbox" selected={isSelected}>
      <TableCell padding="checkbox">
        <Checkbox checked={isSelected} onChange={() => onHandleClick(id)} />
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
        <Box onClick={() => onHandleFavourite(id)}>
          <Iconify
            icon="typcn:star"
            sx={{ color: isFavourite ? 'text.disabled' : 'warning.main', width: 30, height: 30 }}
          />
        </Box>
      </TableCell>
    </TableRow>
  );
};
