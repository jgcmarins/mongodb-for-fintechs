'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveImage from '@/components/ResponsiveImage';

const Thanks = () => {
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
        Thanks
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant={'h4'}
          component={'h4'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 2 }}
        >
          We&apos;re hiring:{' '}
          <a
            href={'https://woovi.com/careers/'}
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'inherit' }}
          >
            Woovi Careers
          </a>
        </Typography>
        <ResponsiveImage src={'/assets/careers.png'} aspectRatio={'1026/1026'} />
      </Box>
    </Box>
  );
};

export default Thanks;
