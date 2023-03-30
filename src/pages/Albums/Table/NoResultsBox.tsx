import { Paper, TableBody, TableCell, TableRow, Typography } from '@mui/material';

type Props = {
  filterName: string;
};
export const NoResultsBox = ({ filterName }: Props) => (
  <TableBody data-testId="no-results-box">
    <TableRow>
      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
        <Paper
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" paragraph>
            Not found
          </Typography>

          <Typography variant="body2">
            No results found for &nbsp;
            <strong>&quot;{filterName}&quot;</strong>.
            <br /> Try checking for typos or using complete words.
          </Typography>
        </Paper>
      </TableCell>
    </TableRow>
  </TableBody>
);
