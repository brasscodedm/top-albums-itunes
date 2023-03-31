import { Stack, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';

import { albumsCountAtom } from '@/pages/Albums/store/atoms';
import { AlbumsCount } from '@/pages/Albums/Table/AlbumsCountSelector/AlbumsCount';

export const HeaderBox = () => {
  const [count] = useRecoilState(albumsCountAtom);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4" gutterBottom>
        Top {count} iTunes albums!
      </Typography>

      <AlbumsCount />
    </Stack>
  );
};
