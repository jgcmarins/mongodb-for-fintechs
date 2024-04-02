'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveImage from '@/components/ResponsiveImage';

const Publisher = () => {
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
        variant={isMobile ? 'h5' : 'h3'}
        component={isMobile ? 'h5' : 'h3'}
        textAlign='center'
        color='text.secondary'
      >
        Publisher
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant={'h6'}
          component={'h6'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 2 }}
        >
          It&apos;s a service that watches MongoDB for changes and publishes them to a message
          broker.
        </Typography>
        <ResponsiveImage src={'/assets/publisher/publisher.png'} aspectRatio={'1843/793'} />
        <Typography
          variant={'h6'}
          component={'h6'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2 }}
        >
          ... but how?
          <br />
          We basically need 2 things: a watcher and a function to handle the change.
        </Typography>
      </Box>
    </Box>
  );
};

export default Publisher;
