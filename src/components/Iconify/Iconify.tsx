import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { CSSProperties } from 'react';

interface Props {
  width?: number;
  icon: string;
  sx?: CSSProperties;
}

export const Iconify = ({ icon, width = 20, sx }: Props) => (
  <Box component={Icon} icon={icon} sx={{ width, height: width, ...sx }} />
);
