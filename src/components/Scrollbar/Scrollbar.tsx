import { Box } from '@mui/material';
import { CSSProperties, memo, ReactElement } from 'react';

import { StyledRootScrollbar, StyledScrollbar } from './Scrollbar.styles';

type Props = {
  children: ReactElement;
  sx?: CSSProperties;
};

export const Scrollbar = memo(({ children, sx, ...other }: Props) => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar clickOnTrack={false} sx={sx} {...other}>
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
});
