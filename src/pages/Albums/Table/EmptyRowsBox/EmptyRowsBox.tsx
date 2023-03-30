import { TableCell, TableRow } from '@mui/material';

type Props = {
  emptyRows: number;
};

export const EmptyRowsBox = ({ emptyRows }: Props) => (
  <TableRow style={{ height: 53 * emptyRows }} data-testid="empty-row-box">
    <TableCell colSpan={6} />
  </TableRow>
);
