import { IconButton, InputAdornment, Tooltip, Typography } from '@mui/material';
import { ChangeEvent } from 'react';

import { Iconify } from '@/components/Iconify/Iconify';

import { StyledRoot, StyledSearch } from './Toolbar.styles';

type Props = {
  numSelected: number;
  filterName: string;
  onFilterName: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Toolbar = ({ numSelected, filterName, onFilterName }: Props) => (
  <StyledRoot
    sx={{
      ...(numSelected > 0 && {
        color: 'primary.main',
        bgcolor: 'primary.lighter',
      }),
    }}
  >
    {numSelected > 0 ? (
      <Typography component="div" variant="subtitle1">
        {numSelected} selected
      </Typography>
    ) : (
      <StyledSearch
        aria-label="toolbar-search"
        value={filterName}
        onChange={onFilterName}
        placeholder="Search albums..."
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
          </InputAdornment>
        }
      />
    )}

    {numSelected > 0 ? (
      <Tooltip title="Delete">
        <IconButton>
          <Iconify icon="eva:trash-2-fill" />
        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="Filter list">
        <IconButton>
          <Iconify icon="ic:round-filter-list" />
        </IconButton>
      </Tooltip>
    )}
  </StyledRoot>
);
