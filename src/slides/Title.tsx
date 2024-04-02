'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Title = ({ title = 'Title', subTitle = 'João Marins' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: {
          xs: '75vh',
          sm: '75vh',
          md: '100vh',
          lg: '100vh',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h2'}
        component={isMobile ? 'h4' : 'h2'}
        textAlign='center'
      >
        {title}
      </Typography>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        component={isMobile ? 'h5' : 'h4'}
        textAlign='center'
        color='text.secondary'
        sx={{ mt: 2 }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Title;
