'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveImage from '@/components/ResponsiveImage';

const SelfHosted = () => {
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
        Self Hosted MongoDB with Kubernetes
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography
          variant={'h6'}
          component={'h6'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 1 }}
        >
          At Woovi we use Kubernetes to manage our infrastructure. There are more architecture
          details,
          <br />
          but in summary the image below represents important resources and how they are connected.
        </Typography>
        <ResponsiveImage src={'/assets/self-hosted/woovi-k8s.png'} aspectRatio={'1934/1161'} />
      </Box>
    </Box>
  );
};

export default SelfHosted;
