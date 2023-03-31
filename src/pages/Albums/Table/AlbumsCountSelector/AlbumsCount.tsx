import { MenuItem, TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { albumsCountAtom } from '@/pages/Albums/store/atoms';

const SORT_OPTIONS = [
  { value: 20, label: '20 albums' },
  { value: 50, label: '50 albums' },
  { value: 100, label: '100 albums' },
  { value: 150, label: '150 albums' },
  { value: 200, label: '200 albums' },
];

export const AlbumsCount = () => {
  const [, setCount] = useRecoilState(albumsCountAtom);

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  return (
    <TextField select size="small" defaultValue={100} onChange={onChangeValue} data-testid="albums-count-select">
      {SORT_OPTIONS.map((option) => (
        <MenuItem key={option.value} value={option.value} data-testid={`menu-item=${option.value}`}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
