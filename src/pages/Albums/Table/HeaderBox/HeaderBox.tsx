import { Stack, Typography } from '@mui/material';

type Props = {
  count: number;
};

export const HeaderBox = ({ count }: Props) => (
  <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    <Typography variant="h4" gutterBottom>
      Top {count} iTunes albums!
    </Typography>
  </Stack>
);
